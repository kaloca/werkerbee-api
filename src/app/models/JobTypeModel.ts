import { Schema, model } from 'mongoose'

import { IJobType } from '../interfaces/models/JobType'

const JobTypeSchema: Schema = new Schema({
	type: { type: String, required: true, unique: true },
	businessType: { type: String, enum: ['RESTAURANT', 'HOTEL'], required: true },
})

export default model<IJobType>('JobType', JobTypeSchema)
