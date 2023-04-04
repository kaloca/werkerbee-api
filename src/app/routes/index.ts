import { Router } from 'express'

import RegisterRouter from './Auth/AuthRouter'
import EditWorkerRouter from './EditWorker/EditWorkerRouter'
import JobTypeRouter from './Jobs/JobTypeRouter'
import CompanyRouter from './Company/CompanyRouter'
import JobPostingRouter from './Jobs/JobPostingRouter'

const routes = Router()

routes.use(RegisterRouter)
routes.use(EditWorkerRouter)
routes.use(JobTypeRouter)
routes.use(CompanyRouter)
routes.use(JobPostingRouter)

export default routes
