import { Request, Response } from 'express'

import JobTypeModel from '@/app/models/JobTypeModel'
import { IJobType } from '@/app/interfaces/models/JobType'

const addJobType = async (req: Request, res: Response) => {
	try {
		const jobType = new JobTypeModel(req.body)
		await jobType.save()
		res.status(201).json({ message: 'Job type added successfully.', jobType })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while adding the job type.', error })
	}
}

const getJobTypes = async (_req: Request, res: Response) => {
	try {
		const jobTypes: IJobType[] = await JobTypeModel.find()
		const jobTypesArray = jobTypes.map((jobType) => jobType.type)
		res.status(200).json({ types: jobTypesArray })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const newGetJobTypes = async (_req: Request, res: Response) => {
	try {
		const jobTypes: IJobType[] = await JobTypeModel.find()
		res.status(200).json({ jobTypes })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const updateJobType = async (req: Request, res: Response) => {
	try {
		const jobTypeId = req.params.jobTypeId

		const allowedFields = ['type', 'businessType']

		const updateData: any = {}

		allowedFields.forEach((field) => {
			if (req.body[field] !== undefined) {
				updateData[field] = req.body[field]
			}
		})

		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({ message: 'No valid fields to update.' })
		}

		const updatedJobType = await JobTypeModel.findOneAndUpdate(
			{ _id: jobTypeId },
			{ $set: updateData },
			{ new: true }
		)

		res
			.status(200)
			.json({ message: 'Job Type updated successfully.', updatedJobType })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating job type.',
			error,
		})
	}
}

const deleteJobType = async (req: Request, res: Response) => {
	const { jobTypeId } = req.params

	try {
		const deletedJobType = await JobTypeModel.findOneAndDelete({
			_id: jobTypeId,
		})

		if (!deletedJobType) {
			return res.status(404).json({ error: 'Job type not found' })
		}

		res.status(200).json(deletedJobType)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

const JobTypeController = {
	addJobType,
	getJobTypes,
	newGetJobTypes,
	updateJobType,
	deleteJobType,
}

export default JobTypeController
