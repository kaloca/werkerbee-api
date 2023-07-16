import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const AdminRouter = Router()

AdminRouter.get('/admin/workers', controllers.AdminController.getWorkers)
AdminRouter.get(
	'/admin/worker/:username',
	controllers.AdminController.getWorker
)
AdminRouter.put(
	'/admin/worker/:username',
	controllers.AdminController.updateWorker
)
AdminRouter.put(
	'/admin/worker/:username/status',
	controllers.AdminController.updateWorkerAccountStatus
)

export default AdminRouter
