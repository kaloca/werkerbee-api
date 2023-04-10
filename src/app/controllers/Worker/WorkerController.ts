import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

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

		const { name, location, rating, jobTypes, experiences } = worker

		return res
			.status(200)
			.json({ name, location, rating, jobTypes, experiences })
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

const WorkerController = {
	getWorkerProfile,
	getWorkerPublicProfile,
	getApplications,
}

export default WorkerController
