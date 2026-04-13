import { RequestHandler, Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';

// Controllers and Middleware
import { getMe, register, login, logout } from '../controllers/authController';
import { validateRequest } from '../middlewares/validateRequest';
import { authenticateUser, AuthRequest } from '../middlewares/authMiddleware';
import { registerSchema, loginSchema } from '../validators/authValidators';

const router = Router();

// --- Google OAuth Strategy config ---
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.API_BASE_URL || 'http://localhost:5001'}/api/auth/google/callback`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await prisma.user.findUnique({ where: { googleId: profile.id } });
      
      if (!user) {
        // Fallback: see if user signed up with same email normally
        const email = profile.emails?.[0].value;
        if (email) {
          const existingUser = await prisma.user.findUnique({ where: { email } });
          if (existingUser) {
            user = await prisma.user.update({
              where: { id: existingUser.id },
              data: { googleId: profile.id }
            });
          } else {
            user = await prisma.user.create({
              data: {
                googleId: profile.id,
                email,
                name: profile.displayName,
              }
            });
          }
        }
      }
      if (user) {
        return done(null, user);
      } else {
        return done(new Error("No email found from Google profile"));
      }
    } catch (error) {
      return done(error as Error);
    }
  }));
}

// Google Auth endpoints
router.get('/me', authenticateUser as RequestHandler, (req: Request, res: Response) => getMe(req as AuthRequest, res));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL}/?error=google-failed` }), (req: Request, res: Response) => {
  const user = req.user as any;
  if (!user) return res.redirect(`${process.env.FRONTEND_URL}/?error=google-failed`);

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.cookie('auth_token', token, { httpOnly: true, maxAge: 86400000 });
  
  res.redirect(`${process.env.FRONTEND_URL}`);
});

router.post('/register', validateRequest(registerSchema), register);

router.post('/login', validateRequest(loginSchema), login);

router.post('/logout', logout);

export default router;