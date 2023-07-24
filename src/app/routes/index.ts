import { Router } from 'express'

import RegisterRouter from './Auth/AuthRouter'
import EditWorkerRouter from './Worker/EditWorkerRouter'
import JobTypeRouter from './Jobs/JobTypeRouter'
import CompanyRouter from './Company/CompanyRouter'
import JobPostingRouter from './Jobs/JobPostingRouter'
import WorkerRouter from './Worker/WorkerRouter'
import JobRouter from './Jobs/JobRouter'
import NotificationRouter from './Notification/NotificationRouter'
import ImageRouter from './Image/ImageRouter'
import CertificationRouter from './Certification/CertificationRouter'
import AdminRouter from './Admin/AdminRouter'
import RatingRouter from './Rating/RatingRouter'

const routes = Router()

routes.use(RegisterRouter)
routes.use(EditWorkerRouter)
routes.use(JobTypeRouter)
routes.use(CompanyRouter)
routes.use(JobPostingRouter)
routes.use(WorkerRouter)
routes.use(JobRouter)
routes.use(NotificationRouter)
routes.use(ImageRouter)
routes.use(CertificationRouter)
routes.use(AdminRouter)
routes.use(RatingRouter)

// Health Check
routes.get('/', (req, res) =>
	res.status(200).json({ message: 'Health Check OK' })
)

export default routes
