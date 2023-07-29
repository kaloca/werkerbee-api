import mongoose, { Schema } from 'mongoose'

import { IJobPosting } from '../interfaces/models/JobPosting'

import pointSchema from './schemas/pointSchema'

const JobPostingSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
		location: {
			type: pointSchema,
			required: true,
		},
		filled: { type: Boolean, default: false },
		dressCode: { type: String, required: true },
		requiredSkills: { type: String, required: true },
		requiredCertifications: { type: String, required: true },
		start: { type: Date, required: true },
		end: { type: Date, required: true },
		dayOfWeek: {
			type: String,
			required: false,
		},
		type: { type: String, required: true },
		payment: { type: Number, required: true },
		applications: [
			{
				type: Schema.Types.ObjectId,
				ref: 'JobApplication',
				select: false,
			},
		],
		confirmationTimeLimitInHours: {
			type: Number, required: false
		},
		confirmationTimeLimitExists: {
			type: Boolean, default: false
		}
	},
	{
		timestamps: true,
	}
)

// JobPostingSchema.pre('save', async function (next) {
// 	console.log('HELLO MOTORS')
// 	try {
// 		const job = this // assumes IJobPosting is your TypeScript interface for the job model
// 		if (!job.dayOfWeek) {
// 			const start = moment(job.start)
// 			job.dayOfWeek = start.format('dddd')
// 		}
// 		next()
// 	} catch (error: any) {
// 		next(error)
// 	}
// })

JobPostingSchema.pre('save', function (next) {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	console.log('hello')
	this.dayOfWeek = days[this.start.getDay()]
	next()
})

JobPostingSchema.index({ location: '2dsphere' })

export default mongoose.model<IJobPosting>('JobPosting', JobPostingSchema)
