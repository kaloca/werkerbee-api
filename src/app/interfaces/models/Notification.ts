import { Document } from 'mongoose'

export interface INotification extends Document {
	recipient: {
		id: string
		type: 'worker' | 'company'
	}
	type: 'PROMOTIONAL' | 'JOB' | 'OPPORTUNITIES' | 'MISC'
	message: string
	readStatus: boolean
	action?: string
	actionData?: any
	dateRead?: Date
}
