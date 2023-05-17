import { Document, Schema } from 'mongoose'

export interface IJobPosting extends Document {
	name: string
	description: string
	company: string
	location: string
	dressCode: string
	requiredSkills: string
	requiredCertifications: string
	time: string
	type: string
	payment: string
	applications: Schema.Types.ObjectId[]
	createdAt: Date
	updatedAt: Date
}
