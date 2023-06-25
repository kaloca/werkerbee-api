import mongoose, { Schema } from 'mongoose'

import { ICompany } from '../interfaces/models/Company'

import addressSchema from './schemas/addressSchema'
import bankAccountSchema from './schemas/bankAccountSchema'
import pointSchema from './schemas/pointSchema'

const jobTypes: Schema = new Schema({
	type: { type: String, required: true },
	rating: { type: Number, required: false },
})

const CompanySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			select: false,
		},
		location: {
			type: pointSchema,
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
		address: {
			type: addressSchema,
			required: true,
		},
		bankInfo: {
			type: bankAccountSchema,
			required: false,
			select: false,
		},
		profilePicture: {
			type: String,
		},
		hashedPassword: {
			type: String,
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	}
)

CompanySchema.index({ location: '2dsphere' })

export default mongoose.model<ICompany>('Company', CompanySchema)
