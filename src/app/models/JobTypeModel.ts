import { Schema, model } from 'mongoose'

import { IJobType } from '../interfaces/models/JobType'

const JobTypeModel: Schema = new Schema({
	type: { type: String, required: true, unique: true },
})

export default model<IJobType>('JobType', JobTypeModel)
