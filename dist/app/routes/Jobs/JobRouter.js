"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const controllers_1 = __importDefault(require("@/app/controllers"));
const JobRouter = (0, express_1.Router)();
JobRouter.get('/job/:jobId', AuthMiddleware_1.requireAuth, controllers_1.default.JobController.getJob);
JobRouter.put('/job/:jobId/clock-in', AuthMiddleware_1.requireAuth, controllers_1.default.JobController.clockIn);
JobRouter.put('/job/:jobId/clock-out', AuthMiddleware_1.requireAuth, controllers_1.default.JobController.clockOut);
JobRouter.post('/job/:jobId/break', AuthMiddleware_1.requireAuth, controllers_1.default.JobController.startBreak);
JobRouter.put('/job/:jobId/break/:breakId', AuthMiddleware_1.requireAuth, controllers_1.default.JobController.endBreak);
exports.default = JobRouter;
//# sourceMappingURL=JobRouter.js.map