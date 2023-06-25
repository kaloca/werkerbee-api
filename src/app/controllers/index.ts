import LoginController from './Auth/LoginController'
import RegisterController from './Auth/RegisterController'
import CompanyProfileController from './Company/CompanyProfileController'
import JobApplicationController from './Jobs/JobApplicationController'
import JobPostingController from './Jobs/JobPostingController'
import JobTypeController from './Jobs/JobTypeController'
import JobController from './Jobs/JobController'
import WorkerController from './Worker/WorkerController'
import WorkerEditController from './Worker/WorkerEditController'
import NotificationsController from './Notifications/NotificationsController'
import ImageController from './Image/ImageController'
import CertificationController from './Certification/WorkerCertificationController'

const controllers = {
	LoginController,
	RegisterController,
	CompanyProfileController,
	JobApplicationController,
	JobPostingController,
	JobTypeController,
	JobController,
	WorkerController,
	WorkerEditController,
	CertificationController,
	NotificationsController,
	ImageController,
}

export default controllers
