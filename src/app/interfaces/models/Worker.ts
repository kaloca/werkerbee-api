import { Document, Schema } from 'mongoose'

import { Address } from '../Address'
import { BankAccount } from '../BankAccount'
import { ICertification } from './Certification'
import { IJobType } from './JobType'

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
	location: {
		coordinates: [number, number]
		type: string
	}
	address: Address
	billingAddress?: Address
	bankInfo?: BankAccount
	ssn: string
	birthday: Date
	rating: number
	jobTypes?: string[]
	jobTypesIds: IJobType[]
	experiences?: Experience[]
	certifications?: ICertification[]
	profilePicture: string
	accountStatus: 'APPROVED' | 'PENDING' | 'REJECTED'
	hashedPassword: string
}
