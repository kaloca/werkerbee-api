"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = void 0;
const WorkerModel_1 = __importDefault(require("@/app/models/WorkerModel"));
const addAddress = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const address = req.body;
        const worker = await WorkerModel_1.default.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        worker.billingAddress = address;
        await worker.save();
        return res.status(200).send();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const updateBankInfo = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const bankInfo = req.body;
        const worker = await WorkerModel_1.default.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        worker.bankInfo = bankInfo;
        await worker.save();
        res.status(200).json({ message: 'Bank information updated successfully.' });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the bank information.',
            error,
        });
    }
};
const addExperience = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const experience = req.body;
        const worker = await WorkerModel_1.default.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        if (!worker.experiences) {
            worker.experiences = [];
        }
        worker.experiences.push(experience);
        await worker.save();
        res.status(200).json({ message: 'Experience added successfully.' });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while adding the experience.',
            error,
        });
    }
};
const deleteExperience = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const experienceId = req.params.experienceId;
        const worker = await WorkerModel_1.default.findById(workerId);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found.' });
        }
        if (!worker.experiences) {
            return res
                .status(404)
                .json({ message: 'No experiences found for this worker.' });
        }
        worker.experiences = worker.experiences.filter((exp) => exp._id.toString() !== experienceId);
        await worker.save();
        res.status(200).json({ message: 'Experience deleted successfully.' });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while deleting the experience.',
            error,
        });
    }
};
const updateProfile = async (req, res) => {
    try {
        const workerId = req.user?.userId;
        const allowedFields = ['bio'];
        const updateData = {};
        allowedFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updateData[field] = req.body[field];
            }
        });
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No valid fields to update.' });
        }
        const updatedWorker = await WorkerModel_1.default.findOneAndUpdate({ _id: workerId }, { $set: updateData }, { new: true });
        res
            .status(200)
            .json({ message: 'Profile updated successfully.', updatedWorker });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the worker profile.',
            error,
        });
    }
};
exports.updateProfile = updateProfile;
const WorkerEditController = {
    addAddress,
    updateBankInfo,
    addExperience,
    deleteExperience,
    updateProfile: exports.updateProfile,
};
exports.default = WorkerEditController;
//# sourceMappingURL=WorkerEditController.js.map