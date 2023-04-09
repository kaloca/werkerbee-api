import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const WorkerRouter = Router()

WorkerRouter.get(
	'/worker/profile',
	requireAuth,
	controllers.WorkerController.getWorkerProfile
)
WorkerRouter.get(
	'/worker/:workerId',
	controllers.WorkerController.getWorkerPublicProfile
)

export default WorkerRouter
