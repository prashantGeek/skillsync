import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../config/prisma';

const router = Router();

// --- Google OAuth Strategy config ---
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.API_BASE_URL || 'http://localhost:5001'}/api/auth/google/callback`
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
router.get('/me', async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies.auth_token;
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    res.json({ user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL}/?error=google-failed` }), (req: Request, res: Response) => {
  const user = req.user as any;
  if (!user) return res.redirect(`${process.env.FRONTEND_URL}/?error=google-failed`);

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.cookie('auth_token', token, { httpOnly: true, maxAge: 86400000 });
  
  // Successful SSO login - redirect the browser to the frontend dashboard or home
  res.redirect(`${process.env.FRONTEND_URL}`);
});

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password required' });
    return;
  }
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: 'Email already exists' });
      return;
    }
    const passwordHash = password ? await bcrypt.hash(password, 10) : undefined;
    const user = await prisma.user.create({
      data: { name, email, passwordHash },
    });
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    
    // Typically set HTTP-only cookie, or return token
    res.cookie('auth_token', token, { httpOnly: true, maxAge: 86400000 });
    res.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }
    
    // Check if it's an SSO-only user trying to login with password
    if (!user.passwordHash) {
      res.status(400).json({ error: 'Please login using Google SSO' });
      return;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    
    res.cookie('auth_token', token, { httpOnly: true, maxAge: 86400000 });
    res.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;