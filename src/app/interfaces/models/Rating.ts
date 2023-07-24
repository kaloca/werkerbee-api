import { Document, Schema } from 'mongoose'

export interface IRating extends Document {
	rating: number
	review?: string
	raterId: Schema.Types.ObjectId
	rateeId: Schema.Types.ObjectId
	jobId: Schema.Types.ObjectId
	jobPostingId: Schema.Types.ObjectId
}
