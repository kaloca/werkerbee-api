import {
	INotification,
	NotificationData,
} from '@/app/interfaces/models/Notification'
import NotificationModel from '@/app/models/NotificationModel'

interface CreateNotificationArgs {
	data: NotificationData
	sendSMS?: boolean
	sendEmail?: boolean
}

const handleEmail = () => {}
const handleSMS = () => {}

const createNotification = async ({
	data,
	sendSMS,
	sendEmail,
}: CreateNotificationArgs) => {
	try {
		const newNotification: INotification = new NotificationModel(data)

		await newNotification.save()

		// if sendSMS handleSMS()
		// if sendEmail handleEmail()
	} catch (error) {
		console.log(error)
	}
}

const NotificationService = { createNotification }

export default NotificationService
