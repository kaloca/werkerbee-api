"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../util/secrets");
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: 'No authorization header provided.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const base64SecretKey = secrets_1.AUTH_SECRET;
        const secretKey = Buffer.from(base64SecretKey, 'base64').toString('utf8');
        const decodedToken = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decodedToken;
        if (req.user?.userId && req.user?.userId !== decodedToken.userId) {
            return res.status(403).json({
                message: 'User ID from token does not match user ID from request.',
            });
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};
exports.requireAuth = requireAuth;
//# sourceMappingURL=AuthMiddleware.js.map