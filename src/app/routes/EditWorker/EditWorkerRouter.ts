import { Router } from 'express'

import controllers from '../../controllers'
import { requireAuth } from '../../middlewares/AuthMiddleware'

const EditWorkerRouter = Router()

EditWorkerRouter.put(
	'/worker/:workerId/bank-info',
	requireAuth,
	controllers.updateBankInfo
)
EditWorkerRouter.put(
	'/worker/:workerId/experience',
	requireAuth,
	controllers.WorkerAddExperienceController
)
EditWorkerRouter.delete(
	'/worker=:workerId&experience=:experienceId/delete',
	requireAuth,
	controllers.WorkerDeleteExperienceController
)
EditWorkerRouter.put(
	'/worker/:workerId/address',
	requireAuth,
	controllers.WorkerAddressController
)

//EditWorkerRouter.post('/editworker/', requireAuth)

export default EditWorkerRouter
