import { Request, Response } from 'express'

import { IJobPosting } from '@/app/interfaces/models/JobPosting'
import { IWorker } from '@/app/interfaces/models/Worker'
import { IJob } from '@/app/interfaces/models/Job'

import JobPostingModel from '@/app/models/JobPostingModel'
import WorkerModel from '@/app/models/WorkerModel'
import JobApplicationModel from '@/app/models/JobApplicationModel'
import JobModel from '@/app/models/JobModel'
import { IJobApplication } from '@/app/interfaces/models/JobApplication'

const applyForJob = async (req: Request, res: Response) => {
	try {
		const jobPostingId = req.params.id
		const workerId = req.user?.userId || 'id'

		const jobPosting: IJobPosting | null = await JobPostingModel.findById(
			jobPostingId
		)
		if (!jobPosting) {
			return res.status(404).json({ message: 'Job not found.' })
		}

		const worker: IWorker | null = await WorkerModel.findById(
			workerId
		).populate('currentApplications')
		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		if (
			worker.currentApplications?.some(
				(application) => application.jobPostingId.toString() == jobPostingId
			)
		) {
			return res
				.status(400)
				.json({ message: 'You have already applied for this job' })
		}

		// Create a new job application instance
		const jobApplication = new JobApplicationModel({
			workerId,
			jobType: jobPosting.type,
			companyName: jobPosting.companyName,
			companyId: jobPosting.companyId,
			jobTitle: jobPosting.name,
			jobPostingId,
			status: 'PENDING',
		})
		await jobApplication.save()

		jobPosting.applications.push(jobApplication._id)
		await jobPosting.save()

		worker.currentApplications?.push(jobApplication._id)
		await worker.save()

		res.status(200).json({ message: 'Application submitted successfully.' })
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while applying for the job.', error })
	}
}

export const updateStatus = async (req: Request, res: Response) => {
	try {
		const { applicationId } = req.params
		const companyId = req.user?.userId
		const { status } = req.body

		const jobApplication = await JobApplicationModel.findById(applicationId)

		if (!jobApplication) {
			return res.status(404).json({ message: 'Job application not found.' })
		}

		if (String(jobApplication.companyId) != companyId) {
			return res
				.status(403)
				.json({ message: 'Unauthorized to access this job application.' })
		}

		jobApplication.status = status
		await jobApplication.save()

		res.status(200).json({
			message: 'Job application status updated successfully.',
			jobApplication,
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the job application status.',
			error,
		})
	}
}

export const acceptApplication = async (req: Request, res: Response) => {
	try {
		const { applicationId } = req.params
		const companyId = req.user?.userId
		// const { status } = req.body

		const jobApplication: IJobApplication | null =
			await JobApplicationModel.findById(applicationId)

		if (!jobApplication) {
			return res.status(404).json({ message: 'Job application not found.' })
		}

		if (String(jobApplication.companyId) != companyId) {
			return res
				.status(403)
				.json({ message: 'Unauthorized to access this job application.' })
		}

		if (jobApplication.status == 'ACCEPTED') {
			return res.status(400).json({ message: 'Application already accepted' })
		}

		const jobPosting = await JobPostingModel.findById(
			jobApplication.jobPostingId
		)

		if (!jobPosting) {
			return res.status(500).json({ message: 'Something went wrong (102)' })
		}

		jobApplication.status = 'ACCEPTED'
		await jobApplication.save()

		const job: IJob = new JobModel({
			name: jobPosting.name,
			workerId: jobApplication.workerId,
			companyId: companyId,
			jobPostingId: jobPosting.id,
		})

		await job.save()

		res.status(200).json({
			message: 'Accepted job application. New job created',
			job,
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the job application status.',
			error,
		})
	}
}

const JobApplicationController = {
	applyForJob,
	updateStatus,
	acceptApplication,
}

export default JobApplicationController
