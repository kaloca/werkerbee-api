import { Document, Schema } from 'mongoose'

export interface IJobApplication extends Document {
	workerId: Schema.Types.ObjectId[]
	companyId: Schema.Types.ObjectId[]
	jobPostingId: Schema.Types.ObjectId[]
	companyName: String
	jobTitle: String
	jobType: String
	status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELED' | 'SCHEDULED'
	createdAt: Date
	updatedAt: Date
}
