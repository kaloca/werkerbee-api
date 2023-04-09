import { Document, Schema } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'

export interface ICompany extends Document {
	name: string
	description: string
	email: string
	location: string
	type: string
	overallRating: number
	jobTypes: string[]
	currentPostings: Schema.Types.ObjectId[]
	pastJobs: Schema.Types.ObjectId[]
	hashedPassword: string
	address: Address
	bankInfo: BankAccount
	createdAt: Date
	updatedAt: Date
}
