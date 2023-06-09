import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import controllers from '@/app/controllers'

const NotificationRouter = Router()

NotificationRouter.post(
	'/notification',
	requireAuth,
	controllers.NotificationsController.createNotification
)

NotificationRouter.get(
	'/notifications',
	requireAuth,
	controllers.NotificationsController.getNotifications
)

export default NotificationRouter
