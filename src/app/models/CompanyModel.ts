import mongoose from 'mongoose'

const CompanyModel = new mongoose.Schema(
	{
		owner: {
			type: String,
		},
		balance: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model('Company', CompanyModel)
