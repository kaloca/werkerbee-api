import { Request, Response } from 'express'

import JobPostingModel from '@/app/models/JobPostingModel'

const createJobPosting = async (req: Request, res: Response) => {
	const newJobPosting = new JobPostingModel({ ...req.body })

	try {
		await newJobPosting.save()
		res.status(201).json(newJobPosting)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

const updateJobPosting = async (req: Request, res: Response) => {
	const { id } = req.params
	const { companyId } = req.body

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
	const { companyId } = req.body

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

const JobPostingController = {
	createJobPosting,
	updateJobPosting,
	deleteJobPosting,
	getAllJobPostings,
}

export default JobPostingController
