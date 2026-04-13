import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import path from 'path';

// Sub Routes
import authRoutes from './routes/auth';
import uploadRoutes from './routes/upload';
import courseRoutes from './routes/course';
import paymentRoutes from './routes/payment';
import { stripeWebhook } from './controllers/paymentController';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Webhook must be parsed as raw body, so we put it before express.json()
app.post('/api/payments/webhook', express.raw({ type: 'application/json' }), stripeWebhook);

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());

// Setup a directory map to serve uploaded multimedia back to the frontend
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes); 
app.use('/api/courses', courseRoutes); 
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
