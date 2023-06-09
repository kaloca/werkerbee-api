import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import controllers from '@/app/controllers'

const JobRouter = Router()

JobRouter.get('/job/:jobId', requireAuth, controllers.JobController.getJob)
JobRouter.put(
	'/job/:jobId/clock-in',
	requireAuth,
	controllers.JobController.clockIn
)
JobRouter.put(
	'/job/:jobId/clock-out',
	requireAuth,
	controllers.JobController.clockOut
)
JobRouter.post(
	'/job/:jobId/break',
	requireAuth,
	controllers.JobController.startBreak
)
JobRouter.put(
	'/job/:jobId/break/:breakId',
	requireAuth,
	controllers.JobController.endBreak
)

export default JobRouter
