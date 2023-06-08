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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const pointSchema_1 = __importDefault(require("./schemas/pointSchema"));
const JobPostingSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Company', required: true },
    location: {
        type: pointSchema_1.default,
        required: true,
    },
    dressCode: { type: String, required: true },
    requiredSkills: { type: String, required: true },
    requiredCertifications: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    dayOfWeek: {
        type: String,
        required: false,
    },
    type: { type: String, required: true },
    payment: { type: Number, required: true },
    applications: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'JobApplication',
            select: false,
        },
    ],
}, {
    timestamps: true,
});
// JobPostingSchema.pre('save', async function (next) {
// 	console.log('HELLO MOTORS')
// 	try {
// 		const job = this // assumes IJobPosting is your TypeScript interface for the job model
// 		if (!job.dayOfWeek) {
// 			const start = moment(job.start)
// 			job.dayOfWeek = start.format('dddd')
// 		}
// 		next()
// 	} catch (error: any) {
// 		next(error)
// 	}
// })
JobPostingSchema.pre('save', function (next) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    console.log('hello');
    this.dayOfWeek = days[this.start.getDay()];
    next();
});
JobPostingSchema.index({ location: '2dsphere' });
exports.default = mongoose_1.default.model('JobPosting', JobPostingSchema);
//# sourceMappingURL=JobPostingModel.js.map