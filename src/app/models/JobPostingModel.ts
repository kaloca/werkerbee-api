import mongoose, { Schema } from 'mongoose'

import { IJobPosting } from '../interfaces/models/JobPosting'

const JobPostingModel = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		companyId: { type: String, required: true },
		location: { type: String, required: true },
		dressCode: { type: String, required: true },
		requiredSkills: { type: String, required: true },
		requiredCertifications: { type: String, required: true },
		time: { type: String, required: true },
		type: { type: String, required: true },
		payment: { type: String, required: true },
		applicants: { type: [String], required: false, default: [] },
	},
	{
		timestamps: true,
	}
)
export default mongoose.model<IJobPosting>('JobPosting', JobPostingModel)
