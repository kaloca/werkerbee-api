import { Document, Schema } from 'mongoose'

export interface IJobApplication extends Document {
	worker: Schema.Types.ObjectId[]
	company: Schema.Types.ObjectId[]
	jobPosting: Schema.Types.ObjectId[]
	status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELED' | 'SCHEDULED'
	timeAccepted?: Date
	createdAt: Date
	updatedAt: Date
}
