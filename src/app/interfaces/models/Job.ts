import { Document } from 'mongoose'

export type TimelineEventType =
	| 'CLOCK_IN'
	| 'CLOCK_OUT'
	| 'BREAK_START'
	| 'BREAK_END'

export interface ITimelineEvent {
	status: TimelineEventType
	time: Date
}
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
	timeline: ITimelineEvent[]
	workerRating?: number
	createdAt: Date
	updatedAt: Date
}
