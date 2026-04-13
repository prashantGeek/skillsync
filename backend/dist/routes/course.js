"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const validateRequest_1 = require("../middlewares/validateRequest");
const courseValidators_1 = require("../validators/courseValidators");
const courseController_1 = require("../controllers/courseController");
const router = (0, express_1.Router)();
// --- PUBLIC / LEARNER ROUTES ---
// @route   GET /api/courses/
// @desc    Get all published courses (public)
router.get('/', courseController_1.getAllPublishedCourses);
// @route   GET /api/courses/:id
// @desc    Get course details (public with optional auth for enrollment status)
router.get('/:id', async (req, res, next) => {
    // Use authenticateUser middleware optionally
    const token = req.cookies.auth_token;
    if (token) {
        (0, authMiddleware_1.authenticateUser)(req, res, next);
    }
    else {
        next();
    }
}, courseController_1.getCourseDetailsPublic);
// @route   POST /api/courses/:id/enroll
// @desc    Enroll in a course
router.post('/:id/enroll', authMiddleware_1.authenticateUser, courseController_1.enrollInCourse);
// --- INSTRUCTOR ROUTES ---
// Protect ALL routes below this middleware
router.use(authMiddleware_1.authenticateUser);
// Guard ALL routes so only Instructors (or Admins) can manage courses
router.use((0, authMiddleware_1.authorizeRole)(['INSTRUCTOR', 'ADMIN']));
// @route   GET /api/courses/instructor
// @desc    Get all courses created by the logged-in instructor
router.get('/instructor', courseController_1.getInstructorCourses);
// @route   POST /api/courses
// @desc    Create a new course draft
router.post('/', (0, validateRequest_1.validateRequest)(courseValidators_1.createCourseSchema), courseController_1.createCourse);
// @route   PUT /api/courses/:id
// @desc    Update a specific course
router.put('/:id', (0, validateRequest_1.validateRequest)(courseValidators_1.updateCourseSchema), courseController_1.updateCourse);
exports.default = router;
