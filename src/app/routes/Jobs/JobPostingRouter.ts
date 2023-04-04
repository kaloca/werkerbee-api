import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const JobPostingRouter = Router()

JobPostingRouter.post('/job-post', requireAuth, controllers.createJobPosting)
JobPostingRouter.put('/job-post/:id', requireAuth, controllers.updateJobPosting)
JobPostingRouter.delete(
	'/job-post/:id',
	requireAuth,
	controllers.deleteJobPosting
)
JobPostingRouter.get('/job-postings', controllers.getAllJobPostings)

export default JobPostingRouter
