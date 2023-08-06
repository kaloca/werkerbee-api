import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const getWorkers = async (req: Request, res: Response) => {
	try {
		const page: number = parseInt(req.query.page as string) || 1
		const limit: number = parseInt(req.query.limit as string) || 10
		const searchTerm: string | undefined = req.query.search as string

		// calculate the starting document index
		const startIndex = (page - 1) * limit

		const searchQuery = searchTerm
			? { name: new RegExp(searchTerm, 'i') } // case-insensitive search
			: {}

		const workers: IWorker[] = await WorkerModel.find(searchQuery)
			.sort({ createdAt: -1 }) // sort by createdAt in descending order
			.skip(startIndex)
			.limit(limit)
			.select('+address')

		const total = await WorkerModel.countDocuments(searchQuery)

		res.status(200).json({
			workers,
			total,
			page,
			limit,
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching workers.',
			error,
		})
	}
}

const getWorker = async (req: Request, res: Response) => {
	try {
		const username = req.params.username

		const worker: IWorker | null = await WorkerModel.findOne({
			username,
		}).select('+address')

		if (!worker) {
			return res.status(404).json({ message: 'Worker not found.' })
		}

		res.status(200).json({
			worker,
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching workers.',
			error,
		})
	}
}

const updateWorker = async (req: Request, res: Response) => {
	try {
		const username = req.params.username

		const allowedFields = [
			'name',
			'jobTypes',
			'address',
			'status',
			'certifications',
		]

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
			{ username: username },
			{ $set: updateData },
			{ new: true }
		)

		res.status(200).json({ message: 'Worker profile updated successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching workers.',
			error,
		})
	}
}

const updateWorkerAccountStatus = async (req: Request, res: Response) => {
	try {
		const username = req.params.username

		const updatedWorker = await WorkerModel.findOneAndUpdate(
			{ username: username },
			{ accountStatus: req.body.status },
			{ new: true }
		)

		res
			.status(200)
			.json({ message: 'Worker account status updated successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating account status.',
			error,
		})
	}
}

// const getWorkers = async () => {
// 	const query = {} // Match all documents
// 	const update = { $set: { accountStatus: 'PENDING' } }
// 	const options = { multi: true } // Update multiple documents

// 	WorkerModel.updateMany(query, update, options)
// 		.then(() => console.log('Documents updated successfully'))
// 		.catch((error) => console.error(`Error in updating documents: ${error}`))
// }

const AdminController = {
	getWorkers,
	getWorker,
	updateWorker,
	updateWorkerAccountStatus,
}

export default AdminController
