"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editCompanyProfile = void 0;
const CompanyModel_1 = __importDefault(require("@/app/models/CompanyModel"));
const JobPostingModel_1 = __importDefault(require("@/app/models/JobPostingModel"));
const getCompanyProfile = async (req, res) => {
    try {
        const companyId = req.user?.userId;
        console.log('hey');
        const company = await CompanyModel_1.default.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }
        return res.status(200).json({ company });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const getCompanyPublicProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const company = await CompanyModel_1.default.findOne({ username });
        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }
        const { name, location, overallRating, type, jobTypes } = company;
        return res
            .status(200)
            .json({ name, location, overallRating, type, jobTypes });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};
const editCompanyProfile = async (req, res) => {
    try {
        const companyId = req.user?.userId;
        const allowedFields = ['name', 'description'];
        const updateData = {};
        allowedFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updateData[field] = req.body[field];
            }
        });
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No valid fields to update.' });
        }
        const updatedCompany = await CompanyModel_1.default.findOneAndUpdate({ _id: companyId }, { $set: updateData }, { new: true });
        res
            .status(200)
            .json({ message: 'Profile updated successfully.', updatedCompany });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the company profile.',
            error,
        });
    }
};
exports.editCompanyProfile = editCompanyProfile;
const getCompanyJobPosts = async (req, res) => {
    try {
        const companyUsername = req.params.username;
        const company = await CompanyModel_1.default.findOne({
            username: companyUsername,
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }
        const companyId = company.id;
        const jobPostings = await JobPostingModel_1.default.find({
            company: companyId,
        }).select('+applications');
        if (!jobPostings) {
            return res.status(404).json({ message: 'No job postings.' });
        }
        return res.status(200).json(jobPostings);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};
const CompanyProfileController = {
    getCompanyProfile,
    getCompanyPublicProfile,
    editCompanyProfile: exports.editCompanyProfile,
    getCompanyJobPosts,
};
exports.default = CompanyProfileController;
//# sourceMappingURL=CompanyProfileController.js.map