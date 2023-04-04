import { Document } from 'mongoose'

export interface IJobPosting extends Document {
	name: string
	description: string
	companyId: string
	location: string
	dressCode: string
	requiredSkills: string
	requiredCertifications: string
	time: string
	type: string
	payment: string
	applicants: string[]
	createdAt: Date
	updatedAt: Date
}
