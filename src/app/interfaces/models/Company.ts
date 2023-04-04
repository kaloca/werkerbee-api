import { Document } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'

export interface ICompany extends Document {
	name: string
	email: string
	location: string
	type: string
	overallRating: number
	jobTypes: string[]
	currentPostings: string[]
	pastJobs: string[]
	hashedPassword: string
	address: Address
	bankInfo: BankAccount
	createdAt: Date
	updatedAt: Date
}
