"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const controllers_1 = __importDefault(require("@/app/controllers"));
const JobPostingRouter = (0, express_1.Router)();
JobPostingRouter.post('/job-post', AuthMiddleware_1.requireAuth, controllers_1.default.JobPostingController.createJobPosting);
JobPostingRouter.put('/job-post/:id', AuthMiddleware_1.requireAuth, controllers_1.default.JobPostingController.updateJobPosting);
JobPostingRouter.delete('/job-post/:id', AuthMiddleware_1.requireAuth, controllers_1.default.JobPostingController.deleteJobPosting);
JobPostingRouter.get('/job-postings', controllers_1.default.JobPostingController.getAllJobPostings);
JobPostingRouter.get('/job-postings/nearby', controllers_1.default.JobPostingController.getNearbyJobPostings);
JobPostingRouter.get('/job-post/:id/applications', AuthMiddleware_1.requireAuth, controllers_1.default.JobPostingController.getJobApplications);
JobPostingRouter.get('/job-post/:id', controllers_1.default.JobPostingController.getJobPosting);
JobPostingRouter.post('/job-post/:id/apply', AuthMiddleware_1.requireAuth, controllers_1.default.JobApplicationController.applyForJob);
JobPostingRouter.put('/job-application/:applicationId/status', AuthMiddleware_1.requireAuth, controllers_1.default.JobApplicationController.updateStatus);
JobPostingRouter.post('/job-application/:applicationId/accept', AuthMiddleware_1.requireAuth, controllers_1.default.JobApplicationController.acceptApplication);
exports.default = JobPostingRouter;
//# sourceMappingURL=JobPostingRouter.js.map