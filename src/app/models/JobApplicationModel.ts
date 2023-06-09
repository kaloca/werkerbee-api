import mongoose, { Schema } from 'mongoose'

import { IJobApplication } from '../interfaces/models/JobApplication'

const JobApplicationSchema = new Schema(
	{
		worker: { type: Schema.Types.ObjectId, ref: 'Worker', required: true },
		company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
		jobPosting: {
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
