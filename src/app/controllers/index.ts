import RegisterController from './Auth/RegisterController'
import LoginController from './Auth/LoginController'
import WorkerAddressController from './EditWorker/WorkerAddressController'
import {
	WorkerAddExperienceController,
	WorkerDeleteExperienceController,
} from './EditWorker/WorkerExperienceController'
import { updateBankInfo } from './EditWorker/WorkerBankInfoController'

const controllers = {
	RegisterController,
	LoginController,
	WorkerAddressController,
	WorkerAddExperienceController,
	WorkerDeleteExperienceController,
	updateBankInfo,
}

export default controllers
