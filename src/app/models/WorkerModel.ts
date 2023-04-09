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
	phoneNumber: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	location: { type: String, required: true },
	billingAddress: { type: addressSchema, required: false },
	bankInfo: { type: bankAccountSchema, required: false },
	ssn: { type: String, required: true },
	birthday: { type: Date, required: true },
	rating: { type: Number, default: null },
	jobTypes: { type: [String], required: true },
	experiences: { type: [experienceSchema], required: false },
	pastJobs: { type: [Schema.Types.ObjectId], ref: 'Job', required: false },
	hashedPassword: { type: String, required: true },
	// documents: { type: Buffer, required: true },
})

export default mongoose.model<IWorker>('Worker', workerSchema)
