import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import controllers from '@/app/controllers'

const JobRouter = Router()

JobRouter.get('/job/:jobId', requireAuth, controllers.JobController.getJob)

export default JobRouter
