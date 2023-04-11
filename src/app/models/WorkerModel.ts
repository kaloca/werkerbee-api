import mongoose, { Schema } from 'mongoose'

import { IWorker } from '../interfaces/models/Worker'
import addressSchema from './schemas/addressSchema'
import bankAccountSchema from './schemas/bankAccountSchema'

const experienceSchema: Schema = new Schema({
	company: { type: String, required: true },
	jobType: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
})

const workerSchema: Schema = new Schema({
	name: { type: String, required: true },
	username: {
		type: String,
		required: true,
		unique: true,
	},
	bio: { type: String, required: false },
	phoneNumber: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	location: { type: String, required: true },
	address: { type: addressSchema, required: true },
	billingAddress: { type: addressSchema, required: false },
	bankInfo: { type: bankAccountSchema, required: false },
	ssn: { type: String, required: true, unique: true },
	birthday: { type: Date, required: true },
	rating: { type: Number, default: null },
	jobTypes: { type: [String], required: true },
	experiences: { type: [experienceSchema], required: false },
	pastJobs: [{ type: Schema.Types.ObjectId, ref: 'Job', required: false }],
	currentApplications: [
		{
			type: Schema.Types.ObjectId,
			ref: 'JobApplication',
		},
	],
	currentJobs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Job',
		},
	],
	hashedPassword: { type: String, required: true },
	// documents: { type: Buffer, required: true },
})

export default mongoose.model<IWorker>('Worker', workerSchema)
