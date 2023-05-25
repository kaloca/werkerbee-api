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
JobPostingRouter.get(
	'/job-postings/nearby',
	controllers.JobPostingController.getNearbyJobPostings
)
JobPostingRouter.get(
	'/job-post/:id/applications',
	requireAuth,
	controllers.JobPostingController.getJobApplications
)
JobPostingRouter.get(
	'/job-post/:id',
	controllers.JobPostingController.getJobPosting
)
JobPostingRouter.post(
	'/job-post/:id/apply',
	requireAuth,
	controllers.JobApplicationController.applyForJob
)
JobPostingRouter.put(
	'/job-application/:applicationId/status',
	requireAuth,
	controllers.JobApplicationController.updateStatus
)
JobPostingRouter.post(
	'/job-application/:applicationId/accept',
	requireAuth,
	controllers.JobApplicationController.acceptApplication
)

export default JobPostingRouter
