"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const WorkerModel_1 = __importDefault(require("@/app/models/WorkerModel"));
const JobModel_1 = __importDefault(require("@/app/models/JobModel"));
const JobApplicationModel_1 = __importDefault(require("@/app/models/JobApplicationModel"));
const getWorkerProfile = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const worker = await WorkerModel_1.default.findById(workerId).select('+address');
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        return res.status(200).json({ worker });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const getWorkerPublicProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const worker = await WorkerModel_1.default.findOne({ username });
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        const { name, location, rating, jobTypes, experiences, address } = worker;
        return res
            .status(200)
            .json({ name, location, rating, jobTypes, experiences, address });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const getApplications = async (req, res) => {
    const username = req.params.username;
    const workerId = req.user?.userId;
    try {
        const worker = await WorkerModel_1.default.findOne({ username });
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }
        if (workerId != worker._id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        const applications = await JobApplicationModel_1.default.find({
            worker: workerId,
        }).populate('jobPosting company');
        res.status(200).json(applications);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
const getJobs = async (req, res) => {
    const username = req.params.username;
    const workerId = req.user?.userId;
    try {
        const worker = await WorkerModel_1.default.findOne({ username });
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }
        if (workerId != worker.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const jobs = await JobModel_1.default.find({ workerId }).populate('jobPostingId');
        if (!jobs) {
            return res.status(404).json({ message: "Worker doesn't have any jobs" });
        }
        res.status(200).json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
const getJobsCalendar = async (req, res) => {
    // Get number of days from request or default to 7
    const numberOfDays = Number(req.query.days) || 7;
    // Get start of the current week
    const startOfWeek = (0, moment_1.default)().startOf('week');
    // Get end date based on numberOfDays
    const endDate = startOfWeek.clone().add(numberOfDays, 'days');
    // Find jobs between startOfWeek and endDate
    const jobs = await JobModel_1.default.find({
        shiftStart: {
            $gte: startOfWeek.toDate(),
            $lt: endDate.toDate(),
        },
    }).lean();
    const days = [];
    // Loop through each day and add events
    for (let m = startOfWeek; m.isBefore(endDate); m.add(1, 'days')) {
        const dateStr = m.format('YYYY-MM-DD');
        // Filter events for the current day
        const dayJobs = jobs.filter((e) => (0, moment_1.default)(e.shiftStart).isSame(m, 'day'));
        days.push({
            date: dateStr,
            isCurrentMonth: m.isSame(new Date(), 'month'),
            isToday: m.isSame(new Date(), 'day'),
            events: dayJobs.map((job) => ({
                id: job._id,
                name: job.name,
                start: job.shiftStart.toISOString(),
                end: job.shiftEnd.toISOString(),
            })),
        });
    }
    return res.status(200).json(days);
};
const WorkerController = {
    getWorkerProfile,
    getWorkerPublicProfile,
    getApplications,
    getJobs,
    getJobsCalendar,
};
exports.default = WorkerController;
//# sourceMappingURL=WorkerController.js.map