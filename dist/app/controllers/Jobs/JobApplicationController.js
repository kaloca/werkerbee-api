"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptApplication = exports.updateStatus = void 0;
const JobPostingModel_1 = __importDefault(require("@/app/models/JobPostingModel"));
const WorkerModel_1 = __importDefault(require("@/app/models/WorkerModel"));
const JobApplicationModel_1 = __importDefault(require("@/app/models/JobApplicationModel"));
const JobModel_1 = __importDefault(require("@/app/models/JobModel"));
const applyForJob = async (req, res) => {
    try {
        console.log('heer');
        const jobPostingId = req.params.id;
        const workerId = req.user?.userId || 'id';
        const jobPosting = await JobPostingModel_1.default.findById(jobPostingId).select('+applications');
        if (!jobPosting) {
            return res.status(404).json({ message: 'Job not found.' });
        }
        const worker = await WorkerModel_1.default.findById(workerId);
        console.log(worker?.name);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        const application = await JobApplicationModel_1.default.findOne({
            worker: workerId,
            jobPosting: jobPostingId,
        });
        if (application) {
            return res
                .status(400)
                .json({ message: 'You have already applied for this job' });
        }
        console.log('nowhere');
        // Create a new job application instance
        const jobApplication = new JobApplicationModel_1.default({
            worker: workerId,
            company: jobPosting.company,
            jobPosting: jobPostingId,
            status: 'PENDING',
        });
        await jobApplication.save();
        jobPosting.applications.push(jobApplication._id);
        await jobPosting.save();
        res.status(200).json({ message: 'Application submitted successfully.' });
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ message: 'An error occurred while applying for the job.', error });
    }
};
const updateStatus = async (req, res) => {
    try {
        const { applicationId } = req.params;
        const companyId = req.user?.userId;
        const { status } = req.body;
        const jobApplication = await JobApplicationModel_1.default.findById(applicationId);
        if (!jobApplication) {
            return res.status(404).json({ message: 'Job application not found.' });
        }
        if (String(jobApplication.company) != companyId) {
            return res
                .status(403)
                .json({ message: 'Unauthorized to access this job application.' });
        }
        jobApplication.status = status;
        await jobApplication.save();
        res.status(200).json({
            message: 'Job application status updated successfully.',
            jobApplication,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error,
        });
    }
};
exports.updateStatus = updateStatus;
const acceptApplication = async (req, res) => {
    try {
        const { applicationId } = req.params;
        const companyId = req.user?.userId;
        // const { status } = req.body
        const jobApplication = await JobApplicationModel_1.default.findById(applicationId);
        if (!jobApplication) {
            return res.status(404).json({ message: 'Job application not found.' });
        }
        if (String(jobApplication.company) != companyId) {
            return res
                .status(403)
                .json({ message: 'Unauthorized to access this job application.' });
        }
        if (jobApplication.status == 'ACCEPTED') {
            return res.status(400).json({ message: 'Application already accepted' });
        }
        const jobPosting = await JobPostingModel_1.default.findById(jobApplication.jobPosting);
        if (!jobPosting) {
            return res.status(500).json({ message: 'Something went wrong (102)' });
        }
        jobApplication.status = 'ACCEPTED';
        await jobApplication.save();
        const job = new JobModel_1.default({
            name: jobPosting.name,
            workerId: jobApplication.worker,
            companyId: companyId,
            jobPostingId: jobPosting.id,
            shiftStart: jobPosting.start,
            shiftEnd: jobPosting.end,
        });
        await job.save();
        res.status(200).json({
            message: 'Accepted job application. New job created',
            job,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error,
        });
    }
};
exports.acceptApplication = acceptApplication;
const JobApplicationController = {
    applyForJob,
    updateStatus: exports.updateStatus,
    acceptApplication: exports.acceptApplication,
};
exports.default = JobApplicationController;
//# sourceMappingURL=JobApplicationController.js.map