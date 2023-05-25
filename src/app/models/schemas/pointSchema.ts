import { Schema } from 'mongoose'

const pointSchema: Schema = new Schema({
	type: {
		type: String,
		enum: ['Point'],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
})

export default pointSchema
