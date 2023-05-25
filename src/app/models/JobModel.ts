import mongoose, { Schema } from 'mongoose'

import { IJob } from '../interfaces/models/Job'

const JobSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		workerId: {
			type: Schema.Types.ObjectId,
			ref: 'Worker',
			required: true,
		},
		companyId: {
			type: Schema.Types.ObjectId,
			ref: 'Company',
			required: true,
		},
		jobPostingId: {
			type: Schema.Types.ObjectId,
			ref: 'JobPosting',
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['PENDING', 'COMPLETE', 'CANCELED'],
			default: 'PENDING',
		},
		shiftStart: {
			type: Date,
			required: true,
		},
		shiftEnd: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model<IJob>('Job', JobSchema)
