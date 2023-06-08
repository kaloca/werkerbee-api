"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobModel_1 = __importDefault(require("@/app/models/JobModel"));
const getJob = async (req, res) => {
    const jobId = req.params.jobId;
    try {
        const job = await JobModel_1.default.findById(jobId).populate('jobPostingId');
        res.status(200).json(job);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while fetching job types.', error });
    }
};
const clockIn = async (req, res) => {
    const jobId = req.params.jobId;
    const workerId = req.user?.userId;
    try {
        const job = await JobModel_1.default.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.workerId != workerId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const now = new Date();
        const shiftStart = new Date(job.shiftStart);
        const diff = (now.getTime() - shiftStart.getTime()) / 1000 / 60;
        if (diff < 30) {
            return res.status(400).json({
                message: 'You can only clock in within 30 minutes of shift start time',
                diff,
            });
        }
        job.clockStart = now;
        await job.save();
        res.status(200).json(diff);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while fetching job types.', error });
    }
};
const clockOut = async (req, res) => {
    const jobId = req.params.jobId;
    const workerId = req.user?.userId;
    try {
        const job = await JobModel_1.default.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.workerId != workerId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        job.clockEnd = new Date();
        await job.save();
        res.status(200).json(job);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while fetching job types.', error });
    }
};
const startBreak = async (req, res) => {
    const jobId = req.params.jobId;
    const workerId = req.user?.userId;
    try {
        const job = await JobModel_1.default.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.workerId != workerId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const newBreak = { start: new Date() };
        job.breaks ? job.breaks.push(newBreak) : (job.breaks = [newBreak]);
        await job.save();
        res.status(200).json(job);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'An error occurred while fetching job types.', error });
    }
};
const endBreak = async (req, res) => {
    const jobId = req.params.jobId;
    const workerId = req.user?.userId;
    const breakId = req.params.breakId;
    try {
        const job = await JobModel_1.default.findById(jobId);
        if (!job)
            return res.status(404).json({ message: 'Job not found' });
        if (job.workerId != workerId)
            return res.status(401).json({ message: 'Unauthorized' });
        if (!job.breaks)
            return res.status(404).json({ message: 'Break not found' });
        const breakIndex = job.breaks.findIndex((breakItem) => breakItem._id?.toString() === breakId);
        if (breakIndex === -1)
            return res.status(404).send('Break not found');
        job.breaks[breakIndex].end = new Date();
        await job.save();
        res.status(200).send(job);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const JobController = { getJob, clockIn, clockOut, startBreak, endBreak };
exports.default = JobController;
//# sourceMappingURL=JobController.js.map