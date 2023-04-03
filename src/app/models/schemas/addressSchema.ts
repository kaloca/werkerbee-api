import { Schema } from 'mongoose'

const addressSchema: Schema = new Schema(
	{
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		zip: { type: String, required: true },
	},
	{ _id: false }
)

export default addressSchema
