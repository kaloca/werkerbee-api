import { Document, Schema } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'

export interface ICompany extends Document {
	name: string
	username: string
	description: string
	email: string
	location: {
		coordinates: [number, number]
	}
	type: string
	overallRating: number
	jobTypes: string[]
	hashedPassword: string
	address: Address
	bankInfo: BankAccount
	profilePicture: string
	accountStatus: 'APPROVED' | 'PENDING' | 'REJECTED'
	createdAt: Date
	updatedAt: Date
}
