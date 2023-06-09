import { Router } from 'express'

import RegisterRouter from './Auth/AuthRouter'
import EditWorkerRouter from './Worker/EditWorkerRouter'
import JobTypeRouter from './Jobs/JobTypeRouter'
import CompanyRouter from './Company/CompanyRouter'
import JobPostingRouter from './Jobs/JobPostingRouter'
import WorkerRouter from './Worker/WorkerRouter'
import NotificationRouter from './Notification/NotificationRouter'

const routes = Router()

routes.use(RegisterRouter)
routes.use(EditWorkerRouter)
routes.use(JobTypeRouter)
routes.use(CompanyRouter)
routes.use(JobPostingRouter)
routes.use(WorkerRouter)
routes.use(NotificationRouter)

// Health Check
routes.get('/', (req, res) =>
	res.status(200).json({ message: 'Health Check OK' })
)

export default routes
