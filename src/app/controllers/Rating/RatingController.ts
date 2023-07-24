import { Request, Response } from 'express'

import NotificationModel from '@/app/models/NotificationModel'
import CompanyModel from '@/app/models/CompanyModel'
import WorkerModel from '@/app/models/WorkerModel'
import { CompanyRatingModel, WorkerRatingModel } from '@/app/models/Rating'

const createRating = async (req: Request, res: Response) => {
	try {
		const { ratingType, ...ratingData } = req.body

		let RatingModel

		if (ratingType === 'worker') {
			RatingModel = WorkerRatingModel
		} else if (ratingType === 'company') {
			RatingModel = CompanyRatingModel
		} else {
			return res.status(400).json({ error: 'Invalid raterType' })
		}

		const newRating = new RatingModel(ratingData)

		await newRating.save()

		res.status(201).json(newRating)
	} catch (error: any) {
		res.status(500).json({ error: error.message })
	}
}

const getRatingById = async (req: Request, res: Response) => {
	console.log('im here')
	const newNotification = new NotificationModel({
		...req.body,
	})

	try {
		await newNotification.save()
		res.status(201).json(newNotification)
	} catch (error) {
		console.log(error)
		res.status(400).json({ message: (error as Error).message })
	}
}

const updateRating = async (req: Request, res: Response) => {
	try {
		const id = req.params.id

		const allowedFields = ['rating', 'review']

		const updateData: any = {}

		allowedFields.forEach((field) => {
			if (req.body[field] !== undefined) {
				updateData[field] = req.body[field]
			}
		})

		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({ message: 'No valid fields to update.' })
		}

		const updatedRating = await WorkerRatingModel.findOneAndUpdate(
			{ _id: id },
			{ $set: updateData },
			{ new: true }
		)

		if (!updatedRating) {
			return res.status(404).json({ message: 'Rating not found.' })
		}

		res.status(200).json({ message: 'Rating updated successfully.' })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating rating.',
			error,
		})
	}
}

const deleteRating = async (req: Request, res: Response) => {
	console.log('im here')
	const newNotification = new NotificationModel({
		...req.body,
	})

	try {
		await newNotification.save()
		res.status(201).json(newNotification)
	} catch (error) {
		console.log(error)
		res.status(400).json({ message: (error as Error).message })
	}
}

const getRatings = async (req: Request, res: Response) => {
	try {
		const { raterId, rateeId, jobId } = req.query

		let queryCondition: { [key: string]: string } = {}

		if (raterId) {
			queryCondition.raterId = raterId as string
		} else if (rateeId) {
			queryCondition.rateeId = rateeId as string
		} else if (jobId) {
			queryCondition.jobId = jobId as string
		} else {
			res.status(400).json({ error: 'Invalid query parameter' })
			return
		}

		const workerRatings = await WorkerRatingModel.find(queryCondition).exec()
		const companyRatings = await CompanyRatingModel.find(queryCondition).exec()

		const ratings = [...workerRatings, ...companyRatings]

		res.json(ratings)
	} catch (error) {
		res.status(500).json({ error: (error as Error).message })
	}
}

const RatingController = {
	createRating,
	getRatingById,
	getRatings,
	updateRating,
	deleteRating,
}

export default RatingController
