import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const EditWorkerRouter = Router()

EditWorkerRouter.put(
	'/worker/bank-info',
	requireAuth,
	controllers.WorkerEditController.updateBankInfo
)
EditWorkerRouter.put(
	'/worker/experience',
	requireAuth,
	controllers.WorkerEditController.addExperience
)
EditWorkerRouter.delete(
	'/worker/experience=:experienceId/delete',
	requireAuth,
	controllers.WorkerEditController.deleteExperience
)
EditWorkerRouter.put(
	'/worker/address',
	requireAuth,
	controllers.WorkerEditController.addAddress
)
EditWorkerRouter.put(
	'/worker/profile',
	requireAuth,
	controllers.WorkerEditController.updateProfile
)

//EditWorkerRouter.post('/editworker/', requireAuth)

export default EditWorkerRouter
