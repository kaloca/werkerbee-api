import { Router } from 'express'
import {
	addJobType,
	getJobTypes,
} from '@/app/controllers/Jobs/JobTypeController'

const JobTypeRouter = Router()

JobTypeRouter.post('/job-types', addJobType)
JobTypeRouter.get('/job-types', getJobTypes)

export default JobTypeRouter
