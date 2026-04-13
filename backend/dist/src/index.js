"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const path_1 = __importDefault(require("path"));
// Sub Routes
const auth_1 = __importDefault(require("./routes/auth"));
const upload_1 = __importDefault(require("./routes/upload"));
const course_1 = __importDefault(require("./routes/course"));
const payment_1 = __importDefault(require("./routes/payment"));
const paymentController_1 = require("./controllers/paymentController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
// Webhook must be parsed as raw body, so we put it before express.json()
app.post('/api/payments/webhook', express_1.default.raw({ type: 'application/json' }), paymentController_1.stripeWebhook);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
// Setup a directory map to serve uploaded multimedia back to the frontend
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
// Routes
app.use('/api/auth', auth_1.default);
app.use('/api/upload', upload_1.default);
app.use('/api/courses', course_1.default);
app.use('/api/payments', payment_1.default);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
