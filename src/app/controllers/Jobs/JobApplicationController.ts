import { Request, Response } from 'express'

import { IJobPosting } from '@/app/interfaces/models/JobPosting'
import { IWorker } from '@/app/interfaces/models/Worker'
import { IJob } from '@/app/interfaces/models/Job'

import JobPostingModel from '@/app/models/JobPostingModel'
import WorkerModel from '@/app/models/WorkerModel'
import JobApplicationModel from '@/app/models/JobApplicationModel'
import JobModel from '@/app/models/JobModel'
import { IJobApplication } from '@/app/interfaces/models/JobApplication'
import NotificationService from '@/app/services/Notifications/NotificationService'

const applyForJob = async (req: Request, res: Response) => {
	try {
		const jobPostingId = req.params.id
		const workerId = req.user?.userId || 'id'

		const jobPosting: IJobPosting | null = await JobPostingModel.findById(
			jobPostingId
		).select('+applications')

		if (!jobPosting) {
			return res.status(404).json({ message: 'Job not found.' })
		}

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		const application: IJobApplication | null =
			await JobApplicationModel.findOne({
				worker: workerId,
				jobPosting: jobPostingId,
			})

		if (application) {
			return res
				.status(400)
				.json({ message: 'You have already applied for this job' })
		}

		// Create a new job application instance
		const jobApplication = new JobApplicationModel({
			worker: workerId,
			company: jobPosting.company,
			jobPosting: jobPostingId,
			status: 'PENDING',
		})
		await jobApplication.save()

		jobPosting.applications.push(jobApplication._id)
		await jobPosting.save()

		res.status(200).json({ message: 'Application submitted successfully.' })
	} catch (error) {
		console.log(error)
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

		if (String(jobApplication.company) != companyId) {
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

		if (String(jobApplication.company) != companyId) {
			return res
				.status(403)
				.json({ message: 'Unauthorized to access this job application.' })
		}

		if (jobApplication.status == 'ACCEPTED') {
			return res.status(400).json({ message: 'Application already accepted' })
		}

		const jobPosting = await JobPostingModel.findById(jobApplication.jobPosting)

		if (!jobPosting) {
			return res.status(500).json({ message: 'Something went wrong (102)' })
		}

		jobApplication.status = 'ACCEPTED'
		await jobApplication.save()

		NotificationService.createNotification({
			data: {
				user: {
					id: jobApplication.worker.toString(),
					type: 'worker',
				},
				type: 'JOB',
				message: `Your application for ${jobPosting.name} was accepted! Click here to accept or decline this offer.`,
				action: `/applications`,
			},
			sendSMS: true,
			sendEmail: true,
		})

		res.status(200).json({
			message: 'Accepted job application',
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the job application status.',
			error,
		})
	}
}

export const confirmJob = async (req: Request, res: Response) => {
	try {
		const { applicationId } = req.params
		const workerId = req.user?.userId
		// const { status } = req.body

		const jobApplication: IJobApplication | null =
			await JobApplicationModel.findById(applicationId)

		if (!jobApplication) {
			return res.status(404).json({ message: 'Job application not found.' })
		}

		if (String(jobApplication.worker) != workerId) {
			return res
				.status(403)
				.json({ message: 'Unauthorized to access this job application.' })
		}

		if (jobApplication.status != 'ACCEPTED') {
			return res
				.status(400)
				.json({ message: 'Cannot confirm job before being accepted' })
		}

		const jobPosting = await JobPostingModel.findById(jobApplication.jobPosting)

		if (!jobPosting) {
			return res.status(500).json({ message: 'Something went wrong (102)' })
		}

		const overlappingJob = await JobModel.findOne({
			workerId: workerId,
			$or: [
				{
					// Job starts during another job
					shiftStart: { $lt: jobPosting.end, $gte: jobPosting.start },
				},
				{
					// Job ends during another job
					shiftEnd: { $lte: jobPosting.end, $gt: jobPosting.start },
				},
			],
		})

		if (overlappingJob) {
			return res
				.status(400)
				.json({ message: 'You already have a scheduled job at this time.' })
		}

		// Check 2: The job start time is not in the past.
		if (new Date(jobPosting.start) < new Date()) {
			return res.status(400).json({ message: 'This job has already expired.' })
		}

		jobApplication.status = 'SCHEDULED'
		await jobApplication.save()

		jobPosting.filled = true
		await jobPosting.save()

		const job: IJob = new JobModel({
			name: jobPosting.name,
			workerId: jobApplication.worker,
			companyId: jobPosting.company,
			jobPostingId: jobPosting.id,
			shiftStart: jobPosting.start,
			shiftEnd: jobPosting.end,
		})

		await job.save()

		res.status(200).json({
			message: 'Confirmed job application. New job created',
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
	confirmJob,
}

export default JobApplicationController
