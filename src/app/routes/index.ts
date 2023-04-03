import { Router } from 'express'

import RegisterRouter from './Auth/AuthRouter'
import EditWorkerRouter from './EditWorker/EditWorkerRouter'

const routes = Router()

routes.use(RegisterRouter)
routes.use(EditWorkerRouter)

export default routes
