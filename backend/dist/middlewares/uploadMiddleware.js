"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Define storage location and filename format
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, path_1.default.join(__dirname, '../../uploads/videos'));
        }
        else if (file.mimetype.startsWith('image/')) {
            cb(null, path_1.default.join(__dirname, '../../uploads/images'));
        }
        else {
            cb(new Error('Invalid file type'), 'uploads');
        }
    },
    filename: (req, file, cb) => {
        // Generate a unique filename using timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${path_1.default.extname(file.originalname)}`);
    }
});
// File filter (Only accept videos and images)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Uploaded file is not a valid image or video'));
    }
};
// Configured multer instance
exports.upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: {
        fileSize: 100 * 1024 * 1024 // 100 MB max for basic development (industry normally uses straight-to-S3 for multi-GB)
    }
});
