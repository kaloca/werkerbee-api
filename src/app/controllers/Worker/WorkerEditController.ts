import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const addAddress = async (req: Request, res: Response) => {
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

const updateBankInfo = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId
		const bankInfo = req.body

		const worker: IWorker | null = await WorkerModel.findById(workerId)

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

const addExperience = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId
		const experience = req.body

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		if (!worker.experiences) {
			worker.experiences = []
		}
		worker.experiences.push(experience)

		await worker.save()
		res.status(200).json({ message: 'Experience added successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while adding the experience.',
			error,
		})
	}
}

const deleteExperience = async (req: Request, res: Response) => {
	try {
		const workerId = req.params.workerId
		const experienceId = req.params.experienceId

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		if (!worker.experiences) {
			return res
				.status(404)
				.json({ message: 'No experiences found for this worker.' })
		}

		worker.experiences = worker.experiences.filter(
			(exp) => exp._id.toString() !== experienceId
		)

		await worker.save()
		res.status(200).json({ message: 'Experience deleted successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while deleting the experience.',
			error,
		})
	}
}

const WorkerEditController = {
	addAddress,
	updateBankInfo,
	addExperience,
	deleteExperience,
}

export default WorkerEditController
