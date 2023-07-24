import { Schema, model } from 'mongoose'

import { IRating } from '../interfaces/models/Rating'

const options = {
	discriminatorKey: 'kind', // define which model is used (worker or company)
	timestamps: true, // this will add 'created_at' and 'updated_at' fields
}

const RatingSchema = new Schema(
	{
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true,
			validate: {
				validator: Number.isInteger,
				message: '{VALUE} is not an integer value',
			},
		},
		review: {
			type: String,
			required: false,
		},
		raterId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		rateeId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		jobId: {
			type: Schema.Types.ObjectId,
			ref: 'Job',
			required: true,
		},
		jobPostingId: {
			type: Schema.Types.ObjectId,
			ref: 'JobPosting',
			required: true,
		},
	},
	options
)

const Rating = model<IRating>('Rating', RatingSchema)

// Create discriminator models
const WorkerRatingModel = Rating.discriminator<IRating>(
	'WorkerRating',
	new Schema({
		rater_id: { type: Schema.Types.ObjectId, ref: 'Worker' },
		ratee_id: { type: Schema.Types.ObjectId, ref: 'Company' },
	})
)

const CompanyRatingModel = Rating.discriminator<IRating>(
	'CompanyRating',
	new Schema({
		rater_id: { type: Schema.Types.ObjectId, ref: 'Company' },
		ratee_id: { type: Schema.Types.ObjectId, ref: 'Worker' },
	})
)

export { WorkerRatingModel, CompanyRatingModel }
