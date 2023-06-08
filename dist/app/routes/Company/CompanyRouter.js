"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("@/app/controllers"));
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const CompanyRouter = (0, express_1.Router)();
CompanyRouter.get('/company/settings/profile', AuthMiddleware_1.requireAuth, controllers_1.default.CompanyProfileController.getCompanyProfile);
CompanyRouter.get('/company/:username', controllers_1.default.CompanyProfileController.getCompanyPublicProfile);
CompanyRouter.get('/company/:username/posts', controllers_1.default.CompanyProfileController.getCompanyJobPosts);
CompanyRouter.put('/company/profile', AuthMiddleware_1.requireAuth, controllers_1.default.CompanyProfileController.editCompanyProfile);
exports.default = CompanyRouter;
//# sourceMappingURL=CompanyRouter.js.map