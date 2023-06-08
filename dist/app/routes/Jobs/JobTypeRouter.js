"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = __importDefault(require("@/app/controllers"));
const express_1 = require("express");
const JobTypeRouter = (0, express_1.Router)();
JobTypeRouter.post('/job-types', controllers_1.default.JobTypeController.addJobType);
JobTypeRouter.get('/job-types', controllers_1.default.JobTypeController.getJobTypes);
exports.default = JobTypeRouter;
//# sourceMappingURL=JobTypeRouter.js.map