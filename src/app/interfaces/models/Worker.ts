import { Document } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'

interface Experience extends Document {
	company: string
	jobType: string
	startDate: Date
	endDate: Date
}

export interface Worker extends Document {
	name: string
	phoneNumber: string
	email: string
	location: string
	billingAddress?: Address
	bankInfo?: BankAccount
	ssn: string
	birthday: Date
	rating: number
	jobTypes: string[]
	experiences?: Experience[]
	hashedPassword: string
}
