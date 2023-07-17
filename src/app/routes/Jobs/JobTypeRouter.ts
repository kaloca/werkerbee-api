import controllers from '@/app/controllers'
import { Router } from 'express'

const JobTypeRouter = Router()

JobTypeRouter.post('/job-types', controllers.JobTypeController.addJobType)
JobTypeRouter.get('/job-types', controllers.JobTypeController.getJobTypes)
JobTypeRouter.get('/jobtypes', controllers.JobTypeController.newGetJobTypes)
JobTypeRouter.put(
	'/job-types/:jobTypeId',
	controllers.JobTypeController.updateJobType
)
JobTypeRouter.delete(
	'/job-types/:jobTypeId',
	controllers.JobTypeController.deleteJobType
)

export default JobTypeRouter
