import { Request, Response } from 'express'

import JobModel from '@/app/models/JobModel'
import {
	IJob,
	ITimelineEvent,
	TimelineEventType,
} from '@/app/interfaces/models/Job'

const createEvent = (status: TimelineEventType): ITimelineEvent => {
	return {
		status,
		time: new Date(),
	}
}

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

const clockIn = async (req: Request, res: Response) => {
	const jobId = req.params.jobId
	const workerId = req.user?.userId

	try {
		const job: IJob | null = await JobModel.findById(jobId)

		if (!job) {
			return res.status(404).json({ message: 'Job not found' })
		}

		if (job.workerId != workerId) {
			return res.status(401).json({ message: 'Unauthorized' })
		}
		const now = new Date()
		const shiftStart = new Date(job.shiftStart)
		const diff = (now.getTime() - shiftStart.getTime()) / 1000 / 60
		console.log(diff)
		if (diff < -30) {
			return res.status(400).json({
				message: 'You can only clock in within 30 minutes of shift start time',
				diff,
			})
		}

		job.clockStart = now
		job.timeline = [createEvent('CLOCK_IN')]

		await job.save()

		res.status(200).json(diff)
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ message: 'An error occurred while clocking in.', error })
	}
}

const clockOut = async (req: Request, res: Response) => {
	const jobId = req.params.jobId
	const workerId = req.user?.userId

	try {
		const job: IJob | null = await JobModel.findById(jobId)

		if (!job) {
			return res.status(404).json({ message: 'Job not found' })
		}

		if (job.workerId != workerId) {
			return res.status(401).json({ message: 'Unauthorized' })
		}

		job.clockEnd = new Date()
		job.timeline.push(createEvent('CLOCK_OUT'))
		job.status = 'COMPLETE'

		await job.save()

		res.status(200).json(job)
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const startBreak = async (req: Request, res: Response) => {
	const jobId = req.params.jobId
	const workerId = req.user?.userId

	try {
		const job: IJob | null = await JobModel.findById(jobId)

		if (!job) {
			return res.status(404).json({ message: 'Job not found' })
		}

		if (job.workerId != workerId) {
			return res.status(401).json({ message: 'Unauthorized' })
		}

		const newBreak = { start: new Date() }
		job.breaks ? job.breaks.push(newBreak) : (job.breaks = [newBreak])
		job.timeline.push(createEvent('BREAK_START'))

		await job.save()

		res.status(200).json(job)
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while fetching job types.', error })
	}
}

const endBreak = async (req: Request, res: Response) => {
	const jobId = req.params.jobId
	const workerId = req.user?.userId
	const breakId = req.params.breakId

	try {
		const job = await JobModel.findById(jobId)
		if (!job) return res.status(404).json({ message: 'Job not found' })
		if (job.workerId != workerId)
			return res.status(401).json({ message: 'Unauthorized' })
		if (!job.breaks) return res.status(404).json({ message: 'Break not found' })
		const breakIndex = job.breaks.findIndex(
			(breakItem) => breakItem._id?.toString() === breakId
		)
		if (breakIndex === -1) return res.status(404).send('Break not found')

		job.breaks[breakIndex].end = new Date()
		job.timeline.push(createEvent('BREAK_END'))

		await job.save()

		res.status(200).send(job)
	} catch (error) {
		res.status(500).send(error)
	}
}

const JobController = { getJob, clockIn, clockOut, startBreak, endBreak }

export default JobController
