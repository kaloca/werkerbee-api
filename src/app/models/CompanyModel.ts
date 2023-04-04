import mongoose, { Schema } from 'mongoose'

import { ICompany } from '../interfaces/models/Company'

import addressSchema from './schemas/addressSchema'
import bankAccountSchema from './schemas/bankAccountSchema'

const jobTypes: Schema = new Schema({
	type: { type: String, required: true },
	rating: { type: Number, required: false },
})

const CompanyModel = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		location: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		overallRating: {
			type: Number,
			required: false,
			default: -1,
		},
		jobTypes: {
			type: [jobTypes],
			required: true,
		},
		currentPostings: {
			type: [String],
			required: false,
		},
		pastJobs: {
			type: [String],
			required: false,
		},
		address: {
			type: addressSchema,
			required: true,
		},
		bankInfo: {
			type: bankAccountSchema,
			required: false,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model<ICompany>('Company', CompanyModel)
