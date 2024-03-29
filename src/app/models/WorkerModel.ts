import mongoose, { Schema } from 'mongoose'

import { IWorker } from '../interfaces/models/Worker'
import addressSchema from './schemas/addressSchema'
import bankAccountSchema from './schemas/bankAccountSchema'
import pointSchema from './schemas/pointSchema'
import { CertificationSchema } from './CertificationModel'

const experienceSchema: Schema = new Schema({
	company: { type: String, required: true },
	jobType: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
})

const workerSchema: Schema = new Schema(
	{
		name: { type: String, required: true },
		username: {
			type: String,
			required: true,
			unique: true,
		},
		bio: { type: String, required: false },
		phoneNumber: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		location: { type: pointSchema, required: false },
		address: { type: addressSchema, required: true, select: false },
		billingAddress: { type: addressSchema, required: false, select: false },
		bankInfo: { type: bankAccountSchema, required: false, select: false },
		// ssn: { type: String, required: false, unique: false, select: false },
		birthday: { type: Date, required: true },
		rating: { type: Number, default: null },
		jobTypes: { type: [String], required: false },
		jobTypesIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'JobType',
				required: true,
			},
		],
		experiences: { type: [experienceSchema], required: false },
		certifications: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Certification',
				select: true,
			},
		],
		profilePicture: {
			type: String,
		},
		accountStatus: {
			type: String,
			enum: ['APPROVED', 'PENDING', 'REJECTED'],
			required: false,
			default: 'PENDING',
		},
		hashedPassword: { type: String, required: true, select: false },
		// documents: { type: Buffer, required: true },
	},
	{ timestamps: true }
)

workerSchema.index({ location: '2dsphere' })

export default mongoose.model<IWorker>('Worker', workerSchema)
