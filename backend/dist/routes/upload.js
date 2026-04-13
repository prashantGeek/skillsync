"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadMiddleware_1 = require("../middlewares/uploadMiddleware");
const uploadController_1 = require("../controllers/uploadController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Only INSTRUCTOR or ADMIN roles can upload course videos/thumbnails!
router.post('/', authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)(['INSTRUCTOR', 'ADMIN']), uploadMiddleware_1.upload.single('file'), // Multer looks for the "file" key in multipart/form-data
uploadController_1.handleUpload);
exports.default = router;
