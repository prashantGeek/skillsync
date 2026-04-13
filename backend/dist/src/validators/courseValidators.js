"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourseSchema = exports.createCourseSchema = void 0;
const zod_1 = require("zod");
exports.createCourseSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
        description: zod_1.z.string().min(10, 'Description must be at least 10 characters'),
        price: zod_1.z.number().nonnegative('Price cannot be negative').optional(),
        thumbnailUrl: zod_1.z.string().url('Must be a valid URL').optional().or(zod_1.z.literal('')),
    }),
});
exports.updateCourseSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(5).optional(),
        description: zod_1.z.string().min(10).optional(),
        price: zod_1.z.number().nonnegative().optional(),
        thumbnailUrl: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
        published: zod_1.z.boolean().optional(),
    }),
});
