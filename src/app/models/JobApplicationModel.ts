import mongoose, { Schema } from 'mongoose'

import { IJobApplication } from '../interfaces/models/JobApplication'

const JobApplicationSchema = new Schema(
	{
		workerId: { type: Schema.Types.ObjectId, ref: 'Worker', required: true },
		companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
		companyName: { type: String, required: true },
		jobTitle: { type: String, required: true },
		jobType: { type: String, required: true },
		jobPostingId: {
			type: Schema.Types.ObjectId,
			ref: 'JobPosting',
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'CANCELED', 'SCHEDULED'],
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model<IJobApplication>(
	'JobApplication',
	JobApplicationSchema
)
