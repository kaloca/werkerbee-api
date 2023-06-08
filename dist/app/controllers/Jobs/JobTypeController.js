"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobTypeModel_1 = __importDefault(require("@/app/models/JobTypeModel"));
const addJobType = async (req, res) => {
    try {
        const jobType = new JobTypeModel_1.default(req.body);
        await jobType.save();
        res.status(201).json({ message: 'Job type added successfully.', jobType });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while adding the job type.', error });
    }
};
const getJobTypes = async (_req, res) => {
    try {
        const jobTypes = await JobTypeModel_1.default.find();
        const jobTypesArray = jobTypes.map((jobType) => jobType.type);
        res.status(200).json({ types: jobTypesArray });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while fetching job types.', error });
    }
};
const JobTypeController = { addJobType, getJobTypes };
exports.default = JobTypeController;
//# sourceMappingURL=JobTypeController.js.map