"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("@/app/controllers"));
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post('/register/worker', controllers_1.default.RegisterController.registerWorker);
AuthRouter.post('/register/company', controllers_1.default.RegisterController.registerCompany);
AuthRouter.post('/login', controllers_1.default.LoginController.login);
AuthRouter.get('/auth/test', AuthMiddleware_1.requireAuth, (req, res) => {
    res.status(200).json({ message: 'Access granted.' });
});
AuthRouter.post('/check-email-username', controllers_1.default.RegisterController.checkValidEmailUsername);
exports.default = AuthRouter;
//# sourceMappingURL=AuthRouter.js.map