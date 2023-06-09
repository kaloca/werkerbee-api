import { Schema } from 'mongoose'

const bankAccountSchema: Schema = new Schema(
	{
		bankName: { type: String, required: true },
		accountNumber: { type: String, required: true },
		routingNumber: { type: String, required: true },
	},
	{ _id: false }
)

export default bankAccountSchema
