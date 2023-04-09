import controllers from '@/app/controllers'
import { Router } from 'express'

const JobTypeRouter = Router()

JobTypeRouter.post('/job-types', controllers.JobTypeController.addJobType)
JobTypeRouter.get('/job-types', controllers.JobTypeController.getJobTypes)

export default JobTypeRouter
