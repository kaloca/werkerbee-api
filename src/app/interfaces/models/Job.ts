import { Document } from 'mongoose'

export interface IJob extends Document {
	name: string
	rating?: number
	workerId: string
	companyId: string
	jobPostingId: string
	status: 'PENDING' | 'COMPLETE' | 'CANCELED'
	time: {}
	createdAt: Date
	updatedAt: Date
}
