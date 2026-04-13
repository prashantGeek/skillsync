import multer from 'multer';
import path from 'path';

// Define storage location and filename format
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, path.join(__dirname, '../../uploads/videos'));
    } else if (file.mimetype.startsWith('image/')) {
      cb(null, path.join(__dirname, '../../uploads/images'));
    } else {
      cb(new Error('Invalid file type'), 'uploads');
    }
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

// File filter (Only accept videos and images)
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Uploaded file is not a valid image or video'));
  }
};

// Configured multer instance
export const upload = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100 MB max for basic development (industry normally uses straight-to-S3 for multi-GB)
  }
});
