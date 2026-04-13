import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware';
import prisma from '../config/prisma';
import Stripe from 'stripe';

// Initialize stripe with cast to any to avoid version mismatches
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', {} as any);

export const createCheckoutSession = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const courseId = req.params.id as string;
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { instructor: true },
    });

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    if (course.price === 0) {
      res.status(400).json({ error: 'Course is free' });
      return;
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (existingEnrollment) {
      res.status(400).json({ error: 'Already enrolled' });
      return;
    }

    // Check if already purchased
    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId,
        courseId,
        status: 'completed',
      },
    });

    if (existingPurchase) {
      res.status(400).json({ error: 'Already purchased' });
      return;
    }

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: course.title,
              description: course.description.substring(0, 200),
            },
            unit_amount: Math.round(course.price * 100), // convert to cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: course.id,
        userId: userId,
      },
      success_url: `${frontendUrl}/courses/${course.id}/learn?success=true`,
      cancel_url: `${frontendUrl}/courses/${course.id}?canceled=true`,
    });

    // Create a pending purchase record
    await prisma.purchase.create({
      data: {
        userId,
        courseId,
        stripeSessionId: session.id,
        amount: course.price,
        status: 'pending',
      },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const stripeWebhook = async (req: Request, res: Response): Promise<void> => {
  const sig = req.headers['stripe-signature'] as string;
  let event: any;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_123'
    );
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  if (event?.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Fulfill the purchase
    const purchase = await prisma.purchase.findUnique({
      where: { stripeSessionId: session.id },
    });

    if (purchase && purchase.status === 'pending') {
      await prisma.$transaction(async (tx: any) => {
        // Update purchase status
        await tx.purchase.update({
          where: { id: purchase.id },
          data: { status: 'completed' },
        });

        // Create enrollment
        await tx.enrollment.create({
          data: {
            userId: purchase.userId,
            courseId: purchase.courseId,
          },
        });
      });
      console.log(`Payment successful and enrollment created for user ${purchase.userId}, course ${purchase.courseId}`);
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).json({ received: true });
};
