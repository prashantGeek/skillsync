import { z } from 'zod';

export const createCourseSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title must be at least 5 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    price: z.number().nonnegative('Price cannot be negative').optional(),
    thumbnailUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  }),
});

export const updateCourseSchema = z.object({
  body: z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(10).optional(),
    price: z.number().nonnegative().optional(),
    thumbnailUrl: z.string().url().optional().or(z.literal('')),
    published: z.boolean().optional(),
  }),
});
