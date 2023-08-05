import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const EditWorkerRouter = Router()

EditWorkerRouter.put(
	'/worker/bank-info',
	requireAuth,
	controllers.WorkerEditController.updateBankInfo
)
EditWorkerRouter.post(
	'/worker/:username/experience',
	requireAuth,
	controllers.WorkerEditController.addExperience
)
EditWorkerRouter.put(
	'/worker/:username/experience=:experienceId',
	requireAuth,
	controllers.WorkerEditController.editExperience
)
EditWorkerRouter.delete(
	'/worker/:username/experience=:experienceId',
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

EditWorkerRouter.put(
	'/worker/certification',
	requireAuth,
	controllers.WorkerController.addCertification
)

//EditWorkerRouter.post('/editworker/', requireAuth)

export default EditWorkerRouter
