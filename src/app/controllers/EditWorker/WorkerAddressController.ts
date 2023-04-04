import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const WorkerAddressController = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId
		const address = req.body

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		worker.billingAddress = address

		await worker.save()
		return res.status(200).send()
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

export default WorkerAddressController
