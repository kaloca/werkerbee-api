import { Document, Schema } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'
import { IJobApplication } from './JobApplication'

interface Experience extends Document {
	company: string
	jobType: string
	startDate: Date
	endDate: Date
}

export interface IWorker extends Document {
	name: string
	username: string
	bio: string
	phoneNumber: string
	email: string
	location: string
	address: Address
	billingAddress?: Address
	bankInfo?: BankAccount
	ssn: string
	birthday: Date
	rating: number
	jobTypes: string[]
	experiences?: Experience[]
	hashedPassword: string
}
