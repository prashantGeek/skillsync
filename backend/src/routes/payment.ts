import { Router } from 'express';
import { createCheckoutSession } from '../controllers/paymentController';
import { authenticateUser } from '../middlewares/authMiddleware';

const router = Router();

// Create a checkout session (protected)
router.post('/courses/:id/checkout', authenticateUser as any, createCheckoutSession as any);

export default router;
