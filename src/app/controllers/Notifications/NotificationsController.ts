import { Request, Response } from 'express'

import { INotification } from '@/app/interfaces/models/Notification'
import NotificationModel from '@/app/models/NotificationModel'
import CompanyModel from '@/app/models/CompanyModel'
import WorkerModel from '@/app/models/WorkerModel'

const createNotification = async (req: Request, res: Response) => {
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

const getNotifications = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.userId

		const company = await CompanyModel.findById(userId)
		const worker = await WorkerModel.findById(userId)

		const user = company || worker

		if (!user) {
			return res.status(404).json({ message: 'No user exists with this id' })
		}

		const limit = parseInt(req.query.limit as string) || 20 // Default limit is 20
		const skip = parseInt(req.query.skip as string) || 0 // Default skip is 0

		const notifications: INotification[] | null = await NotificationModel.find({
			user: {
				id: userId,
				type: company ? 'company' : 'worker',
			},
		})
			.skip(skip)
			.limit(limit)

		// Get the total number of notifications
		const total = await NotificationModel.countDocuments({
			user: {
				id: userId,
				type: company ? 'company' : 'worker',
			},
		})

		// Return both the notifications and the total count
		return res.status(200).json({ notifications, total })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const NotificationsController = { createNotification, getNotifications }

export default NotificationsController
