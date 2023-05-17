import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const WorkerRouter = Router()

WorkerRouter.get(
	'/worker/settings/profile',
	requireAuth,
	controllers.WorkerController.getWorkerProfile
)
WorkerRouter.get(
	'/worker/:username/applications',
	requireAuth,
	controllers.WorkerController.getApplications
)
WorkerRouter.get(
	'/worker/:username',
	controllers.WorkerController.getWorkerPublicProfile
)
WorkerRouter.get(
	'/worker/:username/jobs',
	requireAuth,
	controllers.WorkerController.getJobs
)

export default WorkerRouter
