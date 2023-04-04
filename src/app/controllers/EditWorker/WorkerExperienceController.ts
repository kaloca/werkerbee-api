import { Request, Response } from 'express'

import WorkerModel from '@/app/models/WorkerModel'
import { IWorker } from '@/app/interfaces/models/Worker'

export const WorkerAddExperienceController = async (
	req: Request,
	res: Response
) => {
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

export const WorkerDeleteExperienceController = async (
	req: Request,
	res: Response
) => {
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
