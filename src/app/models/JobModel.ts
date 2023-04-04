import mongoose, { Schema } from 'mongoose'

import { IJob } from '../interfaces/models/Job'

const JobModel = new Schema(
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
			type: String,
			required: true,
		},
		companyId: {
			type: String,
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
export default mongoose.model<IJob>('JobPosting', JobModel)
