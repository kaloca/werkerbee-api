import {
	INotification,
	NotificationData,
} from '@/app/interfaces/models/Notification'
import NotificationModel from '@/app/models/NotificationModel'
import sendEmailNotification from './EmailNotificationService'
import { IWorker } from '@/app/interfaces/models/Worker'
import { ICompany } from '@/app/interfaces/models/Company'
import WorkerModel from '@/app/models/WorkerModel'
import CompanyModel from '@/app/models/CompanyModel'

interface CreateNotificationArgs {
	data: NotificationData
	sendSMS?: boolean
	sendEmail?: boolean
}

const handleEmail = async (notification: INotification) => {
	var email = ""
	if (notification.user.type == "worker"){
		const worker = await WorkerModel.findById(notification.user.id)
		if (!worker){
			return "error: worker not found"
		}
		email = worker.email;
		console.log(email);
	}
	else{
		const company = await CompanyModel.findById(notification.user.id).select("email")
		console.log(company?.toJSON())
		if (!company){
			return "error: company not found"
		}
		email = company.email;
		console.log(email)
	}
	sendEmailNotification(notification, email)
}

const handleSMS = () => {}

const createNotification = async ({
	data,
	sendSMS,
	sendEmail,
}: CreateNotificationArgs) => {
	try {
		const newNotification: INotification = new NotificationModel(data)
		console.log(newNotification.toJSON());

		await newNotification.save()

		// if sendSMS handleSMS()
		// if sendEmail handleEmail()
		
		if(sendEmail){
			handleEmail(newNotification)
		}
	} catch (error) {
		console.log(error)
	}
}

const NotificationService = { createNotification }

export default NotificationService
