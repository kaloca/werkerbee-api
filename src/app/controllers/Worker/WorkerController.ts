import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'
import JobModel from '@/app/models/JobModel'
import { IJob } from '@/app/interfaces/models/Job'

const getWorkerProfile = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId

		const worker: IWorker | null = await WorkerModel.findById(workerId)

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

		const worker: IWorker | null = await WorkerModel.findOne({ username })

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		const { name, location, rating, jobTypes, experiences, address } = worker

		return res
			.status(200)
			.json({ name, location, rating, jobTypes, experiences, address })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const getApplications = async (req: Request, res: Response) => {
	const username = req.params.username
	const workerId = req.user?.userId

	try {
		const worker = await WorkerModel.findById(workerId).populate(
			'currentApplications'
		)

		console.log(worker)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found' })
		}

		if (username != worker.username) {
			return res.status(403).json({ message: 'Unauthorized' })
		}

		res.status(200).json({ applications: worker.currentApplications })
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

const WorkerController = {
	getWorkerProfile,
	getWorkerPublicProfile,
	getApplications,
	getJobs,
}

export default WorkerController
