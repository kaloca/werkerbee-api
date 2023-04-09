import { Request, Response } from 'express'

import { IJobPosting } from '@/app/interfaces/models/JobPosting'
import { IWorker } from '@/app/interfaces/models/Worker'
import JobPostingModel from '@/app/models/JobPostingModel'
import WorkerModel from '@/app/models/WorkerModel'

const applyForJob = async (req: Request, res: Response) => {
	try {
		const jobId = req.params.id
		const workerId = req.user?.userId || 'id'

		const jobPosting: IJobPosting | null = await JobPostingModel.findById(jobId)
		if (!jobPosting) {
			return res.status(404).json({ message: 'Job not found.' })
		}

		const worker: IWorker | null = await WorkerModel.findById(workerId)
		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		// Check if worker has already applied for the job
		if (jobPosting.applicants.includes(workerId)) {
			return res
				.status(400)
				.json({ message: 'You have already applied for this job.' })
		}

		jobPosting.applicants.push(workerId)
		await jobPosting.save()

		res.status(200).json({ message: 'Application submitted successfully.' })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while applying for the job.', error })
	}
}

const JobApplicationController = { applyForJob }

export default JobApplicationController
