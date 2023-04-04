import {
	RegisterWorkerController,
	RegisterCompanyController,
} from './Auth/RegisterController'
import LoginController from './Auth/LoginController'
import WorkerAddressController from './EditWorker/WorkerAddressController'
import {
	WorkerAddExperienceController,
	WorkerDeleteExperienceController,
} from './EditWorker/WorkerExperienceController'
import { updateBankInfo } from './EditWorker/WorkerBankInfoController'
import {
	GetCompanyProfileController,
	GetCompanyPublicProfileController,
} from './Company/CompanyController'
import {
	createJobPosting,
	updateJobPosting,
	deleteJobPosting,
	getAllJobPostings,
} from './Jobs/JobPostingController'

const controllers = {
	RegisterWorkerController,
	RegisterCompanyController,
	LoginController,
	WorkerAddressController,
	WorkerAddExperienceController,
	WorkerDeleteExperienceController,
	updateBankInfo,
	GetCompanyProfileController,
	GetCompanyPublicProfileController,
	createJobPosting,
	updateJobPosting,
	deleteJobPosting,
	getAllJobPostings,
}

export default controllers
