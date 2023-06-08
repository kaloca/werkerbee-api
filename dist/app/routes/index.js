"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRouter_1 = __importDefault(require("./Auth/AuthRouter"));
const EditWorkerRouter_1 = __importDefault(require("./Worker/EditWorkerRouter"));
const JobTypeRouter_1 = __importDefault(require("./Jobs/JobTypeRouter"));
const CompanyRouter_1 = __importDefault(require("./Company/CompanyRouter"));
const JobPostingRouter_1 = __importDefault(require("./Jobs/JobPostingRouter"));
const WorkerRouter_1 = __importDefault(require("./Worker/WorkerRouter"));
const JobRouter_1 = __importDefault(require("./Jobs/JobRouter"));
const routes = (0, express_1.Router)();
routes.use(AuthRouter_1.default);
routes.use(EditWorkerRouter_1.default);
routes.use(JobTypeRouter_1.default);
routes.use(CompanyRouter_1.default);
routes.use(JobPostingRouter_1.default);
routes.use(WorkerRouter_1.default);
routes.use(JobRouter_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map