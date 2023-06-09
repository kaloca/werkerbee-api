import mongoose, { Schema } from 'mongoose'

import { IJob } from '../interfaces/models/Job'

const BreakSchema = new Schema({
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: false,
	},
})

const EventSchema = new Schema(
	{
		status: {
			type: String,
			required: true,
			enum: ['CLOCK_IN', 'CLOCK_OUT', 'BREAK_START', 'BREAK_END'],
		},
		time: {
			type: Date,
			required: true,
		},
	},
	{
		_id: false, // We don't need a unique _id for each event in this case
	}
)

const JobSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		workerId: {
			type: Schema.Types.ObjectId,
			ref: 'Worker',
			required: true,
		},
		companyId: {
			type: Schema.Types.ObjectId,
			ref: 'Company',
			required: true,
		},
		jobPostingId: {
			type: Schema.Types.ObjectId,
			ref: 'JobPosting',
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['PENDING', 'COMPLETE', 'CANCELED'],
			default: 'PENDING',
		},
		shiftStart: {
			type: Date,
			required: true,
		},
		shiftEnd: {
			type: Date,
			required: true,
		},
		clockStart: {
			type: Date,
			required: false,
		},
		clockEnd: {
			type: Date,
			required: false,
		},
		breaks: {
			type: [BreakSchema],
			required: false,
		},
		timeline: {
			type: [EventSchema],
			required: false,
		},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model<IJob>('Job', JobSchema)
