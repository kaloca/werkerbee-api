import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const getWorkerProfile = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId

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
		const workerId = req.params.workerId

		const worker: IWorker | null = await WorkerModel.findById(workerId)

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

const WorkerController = { getWorkerProfile, getWorkerPublicProfile }

export default WorkerController
