import { Document } from 'mongoose'

export interface NotificationData {
	user: {
		id: string
		type: 'worker' | 'company'
	}
	type: 'PROMOTIONAL' | 'JOB' | 'OPPORTUNITIES' | 'MISC'
	emailSubject?: string
	message: string
	action?: string
	link?: string
	actionData?: any
}
export interface INotification extends Document, NotificationData {
	readStatus: boolean
	dateRead?: Date
}
