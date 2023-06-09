import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const addAddress = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId
		const address = req.body

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		worker.billingAddress = address

		await worker.save()
		return res.status(200).send()
	} catch (error) {
		return res.sendStatus(400)
	}
}

const updateBankInfo = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId
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
		const workerId = req.user?.userId
		const experience = req.body

		const worker: IWorker | null = await WorkerModel.findById(workerId)

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}
		if (worker.username != req.params.username) {
			return res.status(400).json({ message: 'Bad request.' })
		}

		if (!worker.experiences) {
			worker.experiences = []
		}
		worker.experiences.push(experience)

		await worker.save()
		res.status(200).json({ message: 'Experience added successfully.' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'An error occurred while adding the experience.',
			error,
		})
	}
}

const editExperience = async (req: Request, res: Response) => {
	try {
		const { username, experienceId } = req.params
		const { jobType, company, startDate, endDate } = req.body // New values to be updated

		const updatedWorker = await WorkerModel.findOneAndUpdate(
			{ username: username, 'experiences._id': experienceId },
			{
				$set: {
					'experiences.$.jobType': jobType,
					'experiences.$.company': company,
					'experiences.$.startDate': startDate,
					'experiences.$.endDate': endDate,
				},
			},
			{ new: true } // This option returns the updated document
		)

		if (!updatedWorker) {
			return res.status(404).json({ message: 'Worker or experience not found' })
		}

		return res.status(200).json(updatedWorker)
	} catch (error) {
		return res.status(500).json({ message: error })
	}
}

const deleteExperience = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId
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

export const updateProfile = async (req: Request, res: Response) => {
	try {
		const workerId = req.user?.userId

		const allowedFields = ['bio']

		const updateData: any = {}

		allowedFields.forEach((field) => {
			if (req.body[field] !== undefined) {
				updateData[field] = req.body[field]
			}
		})

		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({ message: 'No valid fields to update.' })
		}

		const updatedWorker = await WorkerModel.findOneAndUpdate(
			{ _id: workerId },
			{ $set: updateData },
			{ new: true }
		)

		res
			.status(200)
			.json({ message: 'Profile updated successfully.', updatedWorker })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the worker profile.',
			error,
		})
	}
}

const WorkerEditController = {
	addAddress,
	updateBankInfo,
	addExperience,
	deleteExperience,
	editExperience,
	updateProfile,
}

export default WorkerEditController
