import { Request, Response } from 'express'
import moment from 'moment'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'
import JobModel from '@/app/models/JobModel'
import { IJob } from '@/app/interfaces/models/Job'
import { IJobApplication } from '@/app/interfaces/models/JobApplication'
import JobApplicationModel from '@/app/models/JobApplicationModel'
import NotificationModel from '@/app/models/NotificationModel'
import { INotification } from '@/app/interfaces/models/Notification'

const getWorkerProfile = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId

		const worker: IWorker | null = await WorkerModel.findById(workerId).select(
			'+address'
		)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		return res.status(200).json({ worker })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const getWorkerPublicProfile = async (req: Request, res: Response) => {
	try {
		const username = req.params.username

		const worker: IWorker | null = await WorkerModel.findOne({
			username,
		}).select('+address')

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		const completedJobs: IJob[] | null = await JobModel.find({
			workerId: worker.id,
			status: 'COMPLETE',
		})

		const {
			name,
			rating,
			jobTypes,
			experiences,
			profilePicture,
			certifications,
			address,
		} = worker

		return res.status(200).json({
			name,
			rating,
			jobTypes,
			experiences,
			profilePicture,
			certifications,
			completedJobs: completedJobs.length,
			address: {
				city: address.city,
				country: address.country,
			},
		})
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const getApplications = async (req: Request, res: Response) => {
	const username = req.params.username
	const workerId = req.user?.userId
	const { status, past, page, limit } = req.query

	console.log(req.query)

	const pageAsNumber = Number(page) || 1
	const limitAsNumber = Number(limit) || 10

	try {
		const worker = await WorkerModel.findOne({ username })

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found' })
		}

		if (workerId != worker._id) {
			return res.status(403).json({ message: 'Unauthorized' })
		}

		const query: any = {
			worker: workerId,
		}

		if (status) {
			query.status = status
		}

		const applications: IJobApplication[] = await JobApplicationModel.find(
			query
		)
			.populate({
				path: 'jobPosting',
				match: {},
				//match: past == 'false' ? { start: { $gte: new Date() } } : {},
			})
			.populate('company')
			.sort({ createdAt: -1 })
			.skip((pageAsNumber - 1) * limitAsNumber)
			.limit(limitAsNumber)

		const totalApplications = await JobApplicationModel.countDocuments(query)

		const totalPage = Math.ceil(totalApplications / limitAsNumber)

		res.status(200).json({
			applications,
			pagination: {
				currentPage: pageAsNumber,
				totalPage,
				totalApplications,
			},
		})
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}

const getJobs = async (req: Request, res: Response) => {
	const username = req.params.username
	const workerId = req.user?.userId

	try {
		const worker: IWorker | null = await WorkerModel.findOne({ username })

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found' })
		}

		if (workerId != worker.id) {
			return res.status(401).json({ message: 'Unauthorized' })
		}

		const jobs: IJob[] = await JobModel.find({ workerId }).populate(
			'jobPostingId'
		)

		if (!jobs) {
			return res.status(404).json({ message: "Worker doesn't have any jobs" })
		}

		res.status(200).json(jobs)
	} catch (error) {
		res.status(500).json({ message: 'Server error' })
	}
}

const getJobsCalendar = async (req: Request, res: Response) => {
	const workerId = req.user?.userId
	// Get number of days from request or default to 7
	const numberOfDays = Number(req.query.days) || 7

	// Get start of the current week
	const startOfWeek = moment().startOf('week')

	// Get end date based on numberOfDays
	const endDate = startOfWeek.clone().add(numberOfDays, 'days')

	// Find jobs between startOfWeek and endDate
	const jobs = await JobModel.find({
		shiftStart: {
			$gte: startOfWeek.toDate(),
			$lt: endDate.toDate(),
		},
		workerId,
	}).lean()

	const days = []

	// Loop through each day and add events
	for (let m = startOfWeek; m.isBefore(endDate); m.add(1, 'days')) {
		const dateStr = m.format('YYYY-MM-DD')

		// Filter events for the current day
		const dayJobs = jobs.filter((e) => moment(e.shiftStart).isSame(m, 'day'))

		days.push({
			date: dateStr,
			isCurrentMonth: m.isSame(new Date(), 'month'),
			isToday: m.isSame(new Date(), 'day'),
			events: dayJobs.map((job) => ({
				id: job._id,
				name: job.name,
				start: job.shiftStart.toISOString(),
				end: job.shiftEnd.toISOString(),
			})),
		})
	}
	return res.status(200).json(days)
}

const getStatus = async (req: Request, res: Response) => {
	console.log('he')
	try {
		const workerId = req.user?.userId
		console.log(workerId)

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not  sfound.' })
		}

		const unreadNotification: INotification | null =
			await NotificationModel.findOne({
				readStatus: false,
				user: {
					id: workerId,
					type: 'worker',
				},
			})

		return res.status(200).json({
			unreadNotification: unreadNotification && true,
			profilePicture: worker.profilePicture,
		})
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const WorkerController = {
	getWorkerProfile,
	getWorkerPublicProfile,
	getApplications,
	getJobs,
	getJobsCalendar,
	getStatus,
}

export default WorkerController
