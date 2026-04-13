import { Router, RequestHandler, Request, Response, NextFunction } from 'express';
import { authenticateUser, authorizeRole, AuthRequest } from '../middlewares/authMiddleware';
import { validateRequest } from '../middlewares/validateRequest';
import { createCourseSchema, updateCourseSchema } from '../validators/courseValidators';
import { 
  createCourse, 
  getInstructorCourses, 
  updateCourse, 
  getAllPublishedCourses, 
  getCourseDetailsPublic, 
  enrollInCourse 
} from '../controllers/courseController';

const router = Router();

// --- PUBLIC / LEARNER ROUTES ---

// @route   GET /api/courses/
// @desc    Get all published courses (public)
router.get('/', getAllPublishedCourses as RequestHandler);

// @route   GET /api/courses/:id
// @desc    Get course details (public with optional auth for enrollment status)
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  // Use authenticateUser middleware optionally
  const token = req.cookies.auth_token;
  if (token) {
    authenticateUser(req as AuthRequest, res, next);
  } else {
    next();
  }
}, getCourseDetailsPublic as RequestHandler);

// @route   POST /api/courses/:id/enroll
// @desc    Enroll in a course
router.post('/:id/enroll', authenticateUser as RequestHandler, enrollInCourse as RequestHandler);


// --- INSTRUCTOR ROUTES ---
// Protect ALL routes below this middleware
router.use(authenticateUser as RequestHandler);
// Guard ALL routes so only Instructors (or Admins) can manage courses
router.use(authorizeRole(['INSTRUCTOR', 'ADMIN']) as RequestHandler);

// @route   GET /api/courses/instructor
// @desc    Get all courses created by the logged-in instructor
router.get('/instructor', getInstructorCourses as RequestHandler);

// @route   POST /api/courses
// @desc    Create a new course draft
router.post('/', validateRequest(createCourseSchema), createCourse as RequestHandler);

// @route   PUT /api/courses/:id
// @desc    Update a specific course
router.put('/:id', validateRequest(updateCourseSchema), updateCourse as RequestHandler);

export default router;