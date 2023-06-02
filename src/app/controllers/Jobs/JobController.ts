import { Request, Response } from 'express'

import JobModel from '@/app/models/JobModel'
import { IJob } from '@/app/interfaces/models/Job'

const getJob = async (req: Request, res: Response) => {
	const jobId = req.params.jobId

	try {
		const job: IJob[] | null = await JobModel.findById(jobId).populate(
			'jobPostingId'
		)

		res.status(200).json(job)
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const JobController = { getJob }

export default JobController
