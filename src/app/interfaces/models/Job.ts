import { Document } from 'mongoose'

export interface IJob extends Document {
	name: string
	rating?: number
	worker: string
	company: string
	jobPosting: string
	status: 'PENDING' | 'COMPLETE' | 'CANCELED'
	shiftStart: Date
	shiftEnd: Date
	createdAt: Date
	updatedAt: Date
}
