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
		res.status(200).json({ jobTypes })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const JobTypeController = { addJobType, getJobTypes }

export default JobTypeController
