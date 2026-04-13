"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Create a checkout session (protected)
router.post('/courses/:id/checkout', authMiddleware_1.authenticateUser, paymentController_1.createCheckoutSession);
exports.default = router;
