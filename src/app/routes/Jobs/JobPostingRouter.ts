import { Router } from 'express'

import { requireAuth } from '@/app/middlewares/AuthMiddleware'
import controllers from '@/app/controllers'

const JobPostingRouter = Router()

JobPostingRouter.post(
	'/job-post',
	requireAuth,
	controllers.JobPostingController.createJobPosting
)
JobPostingRouter.put(
	'/job-post/:id',
	requireAuth,
	controllers.JobPostingController.updateJobPosting
)
JobPostingRouter.delete(
	'/job-post/:id',
	requireAuth,
	controllers.JobPostingController.deleteJobPosting
)
JobPostingRouter.get(
	'/job-postings',
	controllers.JobPostingController.getAllJobPostings
)
JobPostingRouter.post(
	'/job-post/:id/apply',
	requireAuth,
	controllers.JobApplicationController.applyForJob
)

export default JobPostingRouter
