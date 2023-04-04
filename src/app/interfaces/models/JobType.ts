import { Document } from 'mongoose'

export interface IJobType extends Document {
	type: string
}
