import { Request, Response } from 'express'

import WorkerModel from '../../models/WorkerModel'
import { Worker } from '../../interfaces/models/Worker'

export const updateBankInfo = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId
		const bankInfo = req.body

		const worker: Worker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		worker.bankInfo = bankInfo

		await worker.save()
		res.status(200).json({ message: 'Bank information updated successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the bank information.',
			error,
		})
	}
}
