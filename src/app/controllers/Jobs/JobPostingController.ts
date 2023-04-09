import { Request, Response } from 'express'

import JobPostingModel from '@/app/models/JobPostingModel'

const createJobPosting = async (req: Request, res: Response) => {
	const newJobPosting = new JobPostingModel({
		...req.body,
		companyId: req.user?.userId,
	})

	try {
		await newJobPosting.save()
		res.status(201).json(newJobPosting)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

const updateJobPosting = async (req: Request, res: Response) => {
	const { id } = req.params
	const companyId = req.user?.userId

	try {
		const updatedJobPosting = await JobPostingModel.findOneAndUpdate(
			{ _id: id, companyId },
			req.body,
			{ new: true, runValidators: true }
		)

		if (!updatedJobPosting) {
			return res.status(404).json({ error: 'Job posting not found' })
		}

		res.status(200).json(updatedJobPosting)
	} catch (error) {
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

const getAllJobPostings = async (req: Request, res: Response) => {
	const page = parseInt(req.query.page as string) || 1
	const limit = parseInt(req.query.limit as string) || 10

	try {
		const jobPostings = await JobPostingModel.find()
			.skip((page - 1) * limit)
			.limit(limit)
			.exec()

		const totalJobPostings = await JobPostingModel.countDocuments()
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
		const jobPostingId = req.params.id

		const jobPosting = await JobPostingModel.findById(jobPostingId).populate(
			'applications'
		)

		if (!jobPosting) {
			return res.status(404).json({ message: 'Job posting not found.' })
		}

		if (String(jobPosting.companyId) !== String(req.user?.userId)) {
			return res
				.status(403)
				.json({ message: 'Unauthorized to access this job posting.' })
		}

		res.status(200).json({ applications: jobPosting.applications })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching job applications.',
			error,
		})
	}
}

const JobPostingController = {
	createJobPosting,
	updateJobPosting,
	deleteJobPosting,
	getAllJobPostings,
	getJobApplications,
}

export default JobPostingController
