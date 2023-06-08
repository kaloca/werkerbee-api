"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const BreakSchema = new mongoose_1.Schema({
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: false,
    },
});
const JobSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    workerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Worker',
        required: true,
    },
    companyId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    jobPostingId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'JobPosting',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['PENDING', 'COMPLETE', 'CANCELED'],
        default: 'PENDING',
    },
    shiftStart: {
        type: Date,
        required: true,
    },
    shiftEnd: {
        type: Date,
        required: true,
    },
    clockStart: {
        type: Date,
        required: false,
    },
    clockEnd: {
        type: Date,
        required: false,
    },
    breaks: {
        type: [BreakSchema],
        required: false,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Job', JobSchema);
//# sourceMappingURL=JobModel.js.map