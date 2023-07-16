import { Request, Response } from 'express'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

const getWorkers = async (req: Request, res: Response) => {
	try {
		const page: number = parseInt(req.query.page as string) || 1
		const limit: number = parseInt(req.query.limit as string) || 10

		// calculate the starting document index
		const startIndex = (page - 1) * limit

		const workers: IWorker[] = await WorkerModel.find()
			.sort({ createdAt: -1 }) // sort by createdAt in descending order
			.skip(startIndex)
			.limit(limit)
			.select('+address')

		const total = await WorkerModel.countDocuments()

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

// const getWorkers = async () => {
// 	const query = {} // Match all documents
// 	const update = { $set: { accountStatus: 'PENDING' } }
// 	const options = { multi: true } // Update multiple documents

// 	WorkerModel.updateMany(query, update, options)
// 		.then(() => console.log('Documents updated successfully'))
// 		.catch((error) => console.error(`Error in updating documents: ${error}`))
// }

const AdminController = { getWorkers }

export default AdminController
