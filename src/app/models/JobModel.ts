import mongoose, { Schema } from 'mongoose'

import { IJob } from '../interfaces/models/Job'

const JobSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		companyName: {
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
		status: {
			type: String,
			required: true,
			enum: ['PENDING', 'COMPLETE', 'CANCELED'],
			default: 'PENDING',
		},
		location: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		payment: {
			type: String,
			required: true,
		},
		time: {},
		requiredSkills: {
			type: String,
			required: true,
		},
		requiredCertifications: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model<IJob>('Job', JobSchema)
