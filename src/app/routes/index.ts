import { Router } from 'express'

import RegisterRouter from './Auth/AuthRouter'

const routes = Router()

routes.use(RegisterRouter)

export default routes
