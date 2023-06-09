import { Request, Response } from 'express'

import JobPostingModel from '@/app/models/JobPostingModel'
import CompanyModel from '@/app/models/CompanyModel'
import { ICompany } from '@/app/interfaces/models/Company'
import { IJobApplication } from '@/app/interfaces/models/JobApplication'
import JobApplicationModel from '@/app/models/JobApplicationModel'
import { IJobPosting } from '@/app/interfaces/models/JobPosting'
import WorkerModel from '@/app/models/WorkerModel'

const createJobPosting = async (req: Request, res: Response) => {
	const company: ICompany | null = await CompanyModel.findById(req.user?.userId)

	if (!company) {
		return res
			.status(401)
			.json({ message: 'Only authenticated companies can create job postings' })
	}

	const newJobPosting = new JobPostingModel({
		...req.body,
		company: company._id,
		location: company.location,
	})

	try {
		await newJobPosting.save()
		res.status(201).json({ newJobPosting })
	} catch (error) {
		res.status(400).json({ message: (error as Error).message })
	}
}

const updateJobPosting = async (req: Request, res: Response) => {
	const { id } = req.params
	const companyId = req.user?.userId
	console.log(req.params, req.user)
	try {
		const updatedJobPosting = await JobPostingModel.findOneAndUpdate(
			{ _id: id, company: companyId },
			req.body,
			{ new: true, runValidators: true }
		)

		if (!updatedJobPosting) {
			return res.status(404).json({ error: 'Job posting not found' })
		}

		res.status(200).json(updatedJobPosting)
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: (error as Error).message })
	}
}

const deleteJobPosting = async (req: Request, res: Response) => {
	const { id } = req.params
	const companyId = req.user?.userId

	try {
		const deletedJobPosting = await JobPostingModel.findOneAndDelete({
			_id: id,
			companyId,
		})

		if (!deletedJobPosting) {
			return res.status(404).json({ error: 'Job posting not found' })
		}

		res.status(200).json(deletedJobPosting)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

const getJobPosting = async (req: Request, res: Response) => {
	const { id } = req.params

	try {
		const jobPosting = await JobPostingModel.findById(id).populate({
			path: 'company',
			select: '-email -createdAt -updatedAt -username',
		})

		if (!jobPosting) {
			return res.status(404).json({ error: 'Job posting not found' })
		}

		res.status(200).json({
			jobPosting,
		})
	} catch (error) {
		res.status(500).json({ error: (error as Error).message })
	}
}

const getAllJobPostings = async (req: Request, res: Response) => {
	console.log(req.query)
	const page = parseInt(req.query.page as string) || 1
	const limit = parseInt(req.query.limit as string) || 10

	// Extract filter params
	const dayOfWeek = Array.isArray(req.query.dayOfWeek)
		? req.query.dayOfWeek
		: [req.query.dayOfWeek]
	const minPay = parseInt(req.query.minPay as string)
	const jobType = req.query.jobType as string[]
	const requesterLocation = req.query.requesterLocation as string
	const requesterDistance =
		parseFloat(req.query.requesterDistance as string) || 10
	const sortField = req.query.sortBy as string // This is the field to sort by
	const sortOrder = parseInt(req.query.order as string) || -1 // This is the order to sort in. 1 for ascending, -1 for descending.
	// Build match stage
	const matchStage: any = {}
	if (dayOfWeek.length > 0 && dayOfWeek[0] != undefined)
		matchStage.dayOfWeek = { $in: dayOfWeek }
	if (minPay) matchStage.payment = { $gte: minPay }
	if (jobType) matchStage.type = { $in: jobType }

	const geoNearStage =
		requesterLocation && requesterDistance
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
			: null

	const projectionStage = geoNearStage
		? { $project: { company: 0, distance: 0 } }
		: { $project: { company: 0 } }

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
		{ $unwind: '$company' }, // Flatten the 'company' array
		{
			$addFields: {
				companyName: '$company.name',
				distanceInMiles: geoNearStage
					? { $divide: ['$distance', 1609.34] }
					: undefined, // Convert 'distance' from meters to miles
			},
		},
		projectionStage,
		{ $sort: { [sortField]: sortOrder } }, // Add the sort stage here
		{ $skip: (page - 1) * limit },
		{ $limit: limit },
	].filter(Boolean) // Filter out any stages that are empty

	try {
		const jobPostings = await JobPostingModel.aggregate(pipeline as any)

		const totalJobPostings = await JobPostingModel.countDocuments(matchStage)
		const totalPages = Math.ceil(totalJobPostings / limit)

		res.json({
			totalPages,
			currentPage: page,
			jobPostings,
		})
	} catch (error) {
		res.status(500).json({ error: (error as Error).message })
	}
}

const getJobApplications = async (req: Request, res: Response) => {
	try {
		const companyId = req.user?.userId

		const jobPostingId = req.params.id

		const jobPosting: IJobPosting | null = await JobPostingModel.findById(
			jobPostingId
		)

		if (!jobPosting) {
			return res.status(500).json({ message: 'Job posting not found' })
		}

		if (companyId != jobPosting.company) {
			return res
				.status(403)
				.json({ message: 'Not authorized to view resource' })
		}

		const applications: IJobApplication[] | null =
			await JobApplicationModel.find({ jobPosting: jobPostingId }).populate(
				'worker'
			)

		if (!applications) {
			return res
				.status(404)
				.json({ message: 'No applications for this job posting.' })
		}

		// if (String(jobPosting.company) !== String(req.user?.userId)) {
		// 	return res
		// 		.status(403)
		// 		.json({ message: 'Unauthorized to access this job posting.' })
		// }

		res.status(200).json({ applications, jobName: jobPosting.name })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching job applications.',
			error,
		})
	}
}

const getNearbyJobPostings = async (req: Request, res: Response) => {
	// Then, use that location to find nearby job postings
	await CompanyModel.ensureIndexes().catch((err) => console.log(err))
	const nearbyJobPostings = await CompanyModel.find({
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
	})

	return res.json(nearbyJobPostings)
}

const JobPostingController = {
	createJobPosting,
	updateJobPosting,
	deleteJobPosting,
	getAllJobPostings,
	getJobApplications,
	getJobPosting,
	getNearbyJobPostings,
}

export default JobPostingController
