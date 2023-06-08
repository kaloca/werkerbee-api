"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobPostingModel_1 = __importDefault(require("@/app/models/JobPostingModel"));
const CompanyModel_1 = __importDefault(require("@/app/models/CompanyModel"));
const JobApplicationModel_1 = __importDefault(require("@/app/models/JobApplicationModel"));
const createJobPosting = async (req, res) => {
    const company = await CompanyModel_1.default.findById(req.user?.userId);
    if (!company) {
        return res
            .status(401)
            .json({ message: 'Only authenticated companies can create job postings' });
    }
    const newJobPosting = new JobPostingModel_1.default({
        ...req.body,
        company: company._id,
        location: company.location,
    });
    try {
        await newJobPosting.save();
        res.status(201).json({ newJobPosting });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateJobPosting = async (req, res) => {
    const { id } = req.params;
    const companyId = req.user?.userId;
    console.log(req.params, req.user);
    try {
        const updatedJobPosting = await JobPostingModel_1.default.findOneAndUpdate({ _id: id, company: companyId }, req.body, { new: true, runValidators: true });
        if (!updatedJobPosting) {
            return res.status(404).json({ error: 'Job posting not found' });
        }
        res.status(200).json(updatedJobPosting);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
const deleteJobPosting = async (req, res) => {
    const { id } = req.params;
    const companyId = req.user?.userId;
    try {
        const deletedJobPosting = await JobPostingModel_1.default.findOneAndDelete({
            _id: id,
            companyId,
        });
        if (!deletedJobPosting) {
            return res.status(404).json({ error: 'Job posting not found' });
        }
        res.status(200).json(deletedJobPosting);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getJobPosting = async (req, res) => {
    const { id } = req.params;
    try {
        const jobPosting = await JobPostingModel_1.default.findById(id).populate({
            path: 'company',
            select: '-email -createdAt -updatedAt -username',
        });
        if (!jobPosting) {
            return res.status(404).json({ error: 'Job posting not found' });
        }
        res.status(200).json({
            jobPosting,
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getAllJobPostings = async (req, res) => {
    console.log(req.query);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    // Extract filter params
    const dayOfWeek = Array.isArray(req.query.dayOfWeek)
        ? req.query.dayOfWeek
        : [req.query.dayOfWeek];
    const minPay = parseInt(req.query.minPay);
    const jobType = req.query.jobType;
    const requesterLocation = req.query.requesterLocation;
    const requesterDistance = parseFloat(req.query.requesterDistance) || 10;
    const sortField = req.query.sortBy; // This is the field to sort by
    const sortOrder = parseInt(req.query.order) || -1; // This is the order to sort in. 1 for ascending, -1 for descending.
    // Build match stage
    const matchStage = {};
    if (dayOfWeek.length > 0 && dayOfWeek[0] != undefined)
        matchStage.dayOfWeek = { $in: dayOfWeek };
    if (minPay)
        matchStage.payment = { $gte: minPay };
    if (jobType)
        matchStage.type = { $in: jobType };
    const geoNearStage = requesterLocation && requesterDistance
        ? {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [
                        parseFloat(requesterLocation.split(',')[0]),
                        parseFloat(requesterLocation.split(',')[1]),
                    ],
                },
                distanceField: 'distance',
                spherical: true,
                maxDistance: requesterDistance * 1609.34, // miles to meters
            },
        }
        : null;
    const projectionStage = geoNearStage
        ? { $project: { company: 0, distance: 0 } }
        : { $project: { company: 0 } };
    const pipeline = [
        geoNearStage,
        Object.keys(matchStage).length > 0 ? { $match: matchStage } : null,
        {
            $lookup: {
                from: 'companies',
                localField: 'company',
                foreignField: '_id',
                as: 'company',
            },
        },
        { $unwind: '$company' },
        {
            $addFields: {
                companyName: '$company.name',
                distanceInMiles: geoNearStage
                    ? { $divide: ['$distance', 1609.34] }
                    : undefined, // Convert 'distance' from meters to miles
            },
        },
        projectionStage,
        { $sort: { [sortField]: sortOrder } },
        { $skip: (page - 1) * limit },
        { $limit: limit },
    ].filter(Boolean); // Filter out any stages that are empty
    try {
        const jobPostings = await JobPostingModel_1.default.aggregate(pipeline);
        const totalJobPostings = await JobPostingModel_1.default.countDocuments(matchStage);
        const totalPages = Math.ceil(totalJobPostings / limit);
        res.json({
            totalPages,
            currentPage: page,
            jobPostings,
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getJobApplications = async (req, res) => {
    try {
        const companyId = req.user?.userId;
        const jobPostingId = req.params.id;
        const jobPosting = await JobPostingModel_1.default.findById(jobPostingId);
        if (!jobPosting) {
            return res.status(500).json({ message: 'Job posting not found' });
        }
        if (companyId != jobPosting.company) {
            return res
                .status(403)
                .json({ message: 'Not authorized to view resource' });
        }
        const applications = await JobApplicationModel_1.default.find({ jobPosting: jobPostingId }).populate('worker');
        if (!applications) {
            return res
                .status(404)
                .json({ message: 'No applications for this job posting.' });
        }
        // if (String(jobPosting.company) !== String(req.user?.userId)) {
        // 	return res
        // 		.status(403)
        // 		.json({ message: 'Unauthorized to access this job posting.' })
        // }
        res.status(200).json({ applications, jobName: jobPosting.name });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while fetching job applications.',
            error,
        });
    }
};
const getNearbyJobPostings = async (req, res) => {
    // Then, use that location to find nearby job postings
    await CompanyModel_1.default.ensureIndexes().catch((err) => console.log(err));
    const nearbyJobPostings = await CompanyModel_1.default.find({
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [-122.1639, 37.423], // [longitude, latitude]
                },
                // Optionally, specify a maximum distance (in meters)
                // $maxDistance: 1000,
            },
        },
    });
    return res.json(nearbyJobPostings);
};
const JobPostingController = {
    createJobPosting,
    updateJobPosting,
    deleteJobPosting,
    getAllJobPostings,
    getJobApplications,
    getJobPosting,
    getNearbyJobPostings,
};
exports.default = JobPostingController;
//# sourceMappingURL=JobPostingController.js.map