import { Document } from 'mongoose'

export interface IJob extends Document {
	name: string
	phoneNumber: string
	email: string
	location: string
	ssn: string
	birthday: Date
	rating: number
	createdAt: Date
	updatedAt: Date
}
