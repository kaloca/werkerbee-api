import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const AdminRouter = Router()

AdminRouter.get('/admin/workers', controllers.AdminController.getWorkers)

export default AdminRouter
