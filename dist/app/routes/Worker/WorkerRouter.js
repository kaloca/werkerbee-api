"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("@/app/controllers"));
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const WorkerRouter = (0, express_1.Router)();
WorkerRouter.get('/worker/settings/profile', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerController.getWorkerProfile);
WorkerRouter.get('/worker/:username/applications', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerController.getApplications);
WorkerRouter.get('/worker/:username', controllers_1.default.WorkerController.getWorkerPublicProfile);
WorkerRouter.get('/worker/:username/jobs', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerController.getJobs);
WorkerRouter.get('/worker/:username/jobs/calendar', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerController.getJobsCalendar);
exports.default = WorkerRouter;
//# sourceMappingURL=WorkerRouter.js.map