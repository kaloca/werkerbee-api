"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("@/app/controllers"));
const AuthMiddleware_1 = require("@/app/middlewares/AuthMiddleware");
const EditWorkerRouter = (0, express_1.Router)();
EditWorkerRouter.put('/worker/bank-info', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerEditController.updateBankInfo);
EditWorkerRouter.put('/worker/experience', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerEditController.addExperience);
EditWorkerRouter.delete('/worker/experience=:experienceId/delete', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerEditController.deleteExperience);
EditWorkerRouter.put('/worker/address', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerEditController.addAddress);
EditWorkerRouter.put('/worker/profile', AuthMiddleware_1.requireAuth, controllers_1.default.WorkerEditController.updateProfile);
//EditWorkerRouter.post('/editworker/', requireAuth)
exports.default = EditWorkerRouter;
//# sourceMappingURL=EditWorkerRouter.js.map