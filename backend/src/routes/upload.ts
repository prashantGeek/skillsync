import { Router, RequestHandler } from 'express';
import { upload } from '../middlewares/uploadMiddleware';
import { handleUpload } from '../controllers/uploadController';
import { authenticateUser, authorizeRole } from '../middlewares/authMiddleware';

const router = Router();

// Only INSTRUCTOR or ADMIN roles can upload course videos/thumbnails!
router.post(
  '/',
  authenticateUser as RequestHandler,
  authorizeRole(['INSTRUCTOR', 'ADMIN']) as RequestHandler,
  upload.single('file'), // Multer looks for the "file" key in multipart/form-data
  handleUpload as RequestHandler
);

export default router;