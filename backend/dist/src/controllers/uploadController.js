"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpload = void 0;
// Simulated AWS S3 generic controller acting as a local file proxy
// Industry standard: this would return an S3 Pre-Signed URL instead of the local file URL
const handleUpload = (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }
        const { filename, mimetype } = req.file;
        // Based on where we saved it in our diskStorage middleware
        const folder = mimetype.startsWith('video/') ? 'videos' : 'images';
        // Construct the public URL where the frontend can actually display/play the file
        const fileUrl = `${process.env.API_BASE_URL || 'http://localhost:5001'}/uploads/${folder}/${filename}`;
        res.status(200).json({
            success: true,
            message: 'File successfully uploaded',
            file: {
                url: fileUrl,
                type: mimetype,
                name: filename
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal file processing error' });
    }
};
exports.handleUpload = handleUpload;
