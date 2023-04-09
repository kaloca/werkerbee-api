import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const EditWorkerRouter = Router()

EditWorkerRouter.put(
	'/worker/:workerId/bank-info',
	requireAuth,
	controllers.WorkerEditController.updateBankInfo
)
EditWorkerRouter.put(
	'/worker/:workerId/experience',
	requireAuth,
	controllers.WorkerEditController.addExperience
)
EditWorkerRouter.delete(
	'/worker=:workerId&experience=:experienceId/delete',
	requireAuth,
	controllers.WorkerEditController.deleteExperience
)
EditWorkerRouter.put(
	'/worker/:workerId/address',
	requireAuth,
	controllers.WorkerEditController.addAddress
)

//EditWorkerRouter.post('/editworker/', requireAuth)

export default EditWorkerRouter
