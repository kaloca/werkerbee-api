import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import upload from '@/app/middlewares/uploadMiddleware'

import controllers from '@/app/controllers'

const ImageRouter = Router()

ImageRouter.post(
	'/image',
	upload.single('image'),
	controllers.ImageController.uploadImage
)

ImageRouter.get(
	'/image',
	requireAuth,
	controllers.NotificationsController.getNotifications
)

export default ImageRouter
