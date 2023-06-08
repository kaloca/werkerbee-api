import { Document } from 'mongoose'

export interface IJob extends Document {
	name: string
	rating?: number
	workerId: string
	companyId: string
	jobPostingId: string
	status: 'PENDING' | 'COMPLETE' | 'CANCELED'
	shiftStart: Date
	shiftEnd: Date
	clockStart?: Date
	clockEnd?: Date
	breaks?: [
		{
			start: Date
			end?: Date
			_id?: string
		}
	]
	createdAt: Date
	updatedAt: Date
}
