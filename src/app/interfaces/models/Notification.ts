import { Document } from 'mongoose'

export interface INotification extends Document {
	recipient: {
		id: string
		type: 'Worker' | 'Company'
	}
	type: 'SYSTEM' | 'USER' | 'TRANSACTION' | 'OTHER'
	message: string
	readStatus: boolean
	action?: string
	actionData?: any
	dateRead?: Date
}
