import { Schema, model } from 'mongoose'

import { INotification } from '../interfaces/models/Notification'

const NotificationSchema: Schema = new Schema(
	{
		user: {
			id: { type: Schema.Types.Mixed, required: true },
			type: {
				type: String,
				enum: ['worker', 'company'],
				required: true,
			},
		},
		type: {
			type: String,
			enum: ['PROMOTIONAL', 'JOB', 'OPPORTUNITIES', 'MISC'],
			default: 'MISC',
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		readStatus: {
			type: Boolean,
			default: false,
		},
		action: {
			type: String,
			required: false,
		},
		actionData: {
			type: Schema.Types.Mixed,
			required: false,
		},
		dateRead: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: true }
)

export default model<INotification>('Notification', NotificationSchema)
