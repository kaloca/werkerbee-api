import { Document, Schema } from 'mongoose'

export interface IJobPosting extends Document {
	name: string
	description: string
	company: string
	location: string
	dressCode: string
	requiredSkills: string
	requiredCertifications: string
	start: Date
	end: Date
	dayOfWeek: string
	type: string
	payment: number
	applications: Schema.Types.ObjectId[]
	createdAt: Date
	updatedAt: Date
}
