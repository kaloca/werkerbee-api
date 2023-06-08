"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginController_1 = __importDefault(require("./Auth/LoginController"));
const RegisterController_1 = __importDefault(require("./Auth/RegisterController"));
const CompanyProfileController_1 = __importDefault(require("./Company/CompanyProfileController"));
const JobApplicationController_1 = __importDefault(require("./Jobs/JobApplicationController"));
const JobPostingController_1 = __importDefault(require("./Jobs/JobPostingController"));
const JobTypeController_1 = __importDefault(require("./Jobs/JobTypeController"));
const JobController_1 = __importDefault(require("./Jobs/JobController"));
const WorkerController_1 = __importDefault(require("./Worker/WorkerController"));
const WorkerEditController_1 = __importDefault(require("./Worker/WorkerEditController"));
const controllers = {
    LoginController: LoginController_1.default,
    RegisterController: RegisterController_1.default,
    CompanyProfileController: CompanyProfileController_1.default,
    JobApplicationController: JobApplicationController_1.default,
    JobPostingController: JobPostingController_1.default,
    JobTypeController: JobTypeController_1.default,
    JobController: JobController_1.default,
    WorkerController: WorkerController_1.default,
    WorkerEditController: WorkerEditController_1.default,
};
exports.default = controllers;
//# sourceMappingURL=index.js.map