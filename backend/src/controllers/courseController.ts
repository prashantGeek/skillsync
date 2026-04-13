import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware';

export const createCourse = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description, price, thumbnailUrl } = req.body;
    const instructorId = req.user?.id;

    if (!instructorId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price: price ? parseFloat(price) : 0,
        thumbnailUrl: thumbnailUrl || null,
        instructorId,
      },
    });

    res.status(201).json({ success: true, course });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getInstructorCourses = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const instructorId = req.user?.id;

    if (!instructorId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const courses = await prisma.course.findMany({
      where: { instructorId },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { enrollments: true, modules: true }
        }
      }
    });

    res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateCourse = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const instructorId = req.user?.id;
    const updates = req.body;

    if (!instructorId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    // Verify ownership
    const existingCourse = await prisma.course.findUnique({ where: { id } });
    if (!existingCourse) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
    if (existingCourse.instructorId !== instructorId) {
      res.status(403).json({ error: 'Forbidden: You do not own this course' });
      return;
    }

    const updatedCourse = await prisma.course.update({
      where: { id },
      data: updates,
    });

    res.status(200).json({ success: true, course: updatedCourse });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// --- LEARNER / PUBLIC ENDPOINTS ---

export const getAllPublishedCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await prisma.course.findMany({
      where: { published: true },
      include: {
        instructor: {
          select: { name: true, email: true }
        },
        _count: {
          select: { enrollments: true, modules: true },
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error('Error fetching published courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCourseDetailsPublic = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const userId = req.user?.id; // Optional: user might be logged in or just a guest

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        instructor: { select: { name: true, email: true } },
        modules: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              select: {
                id: true,
                title: true,
                description: true,
                duration: true,
                isFree: true,
                order: true,
                // Only send videoUrl if we decide later or handle it in player endpoint
                videoUrl: false, 
              }
            }
          }
        }
      }
    });

    if (!course || !course.published) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    let isEnrolled = false;
    if (userId) {
      const enrollment = await prisma.enrollment.findUnique({
        where: { userId_courseId: { userId: userId as string, courseId: id as string } }
      });
      isEnrolled = !!enrollment;
    }

    res.status(200).json({ success: true, course, isEnrolled });
  } catch (error) {
    console.error('Error fetching course details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const enrollInCourse = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const courseId = req.params.id as string;
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    // Check if course exists
    const course = await prisma.course.findUnique({ where: { id: courseId as string } });
    if (!course || !course.published) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    // In a real app we would check if course.price > 0 and redirect to payment
    // For now we'll allow free enrollment.
    const enrollment = await prisma.enrollment.upsert({
      where: { userId_courseId: { userId: userId as string, courseId: courseId as string } },
      update: {},
      create: { userId: userId as string, courseId: courseId as string },
    });

    res.status(200).json({ success: true, enrollment });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
