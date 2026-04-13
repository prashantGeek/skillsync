"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../config/prisma"));
// Controllers and Middleware
const authController_1 = require("../controllers/authController");
const validateRequest_1 = require("../middlewares/validateRequest");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const authValidators_1 = require("../validators/authValidators");
const router = (0, express_1.Router)();
// --- Google OAuth Strategy config ---
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.API_BASE_URL || 'http://localhost:5001'}/api/auth/google/callback`,
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await prisma_1.default.user.findUnique({ where: { googleId: profile.id } });
            if (!user) {
                // Fallback: see if user signed up with same email normally
                const email = profile.emails?.[0].value;
                if (email) {
                    const existingUser = await prisma_1.default.user.findUnique({ where: { email } });
                    if (existingUser) {
                        user = await prisma_1.default.user.update({
                            where: { id: existingUser.id },
                            data: { googleId: profile.id }
                        });
                    }
                    else {
                        user = await prisma_1.default.user.create({
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
            }
            else {
                return done(new Error("No email found from Google profile"));
            }
        }
        catch (error) {
            return done(error);
        }
    }));
}
// Google Auth endpoints
router.get('/me', authMiddleware_1.authenticateUser, (req, res) => (0, authController_1.getMe)(req, res));
router.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport_1.default.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL}/?error=google-failed` }), (req, res) => {
    const user = req.user;
    if (!user)
        return res.redirect(`${process.env.FRONTEND_URL}/?error=google-failed`);
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    res.cookie('auth_token', token, { httpOnly: true, maxAge: 86400000 });
    res.redirect(`${process.env.FRONTEND_URL}`);
});
router.post('/register', (0, validateRequest_1.validateRequest)(authValidators_1.registerSchema), authController_1.register);
router.post('/login', (0, validateRequest_1.validateRequest)(authValidators_1.loginSchema), authController_1.login);
router.post('/logout', authController_1.logout);
exports.default = router;
