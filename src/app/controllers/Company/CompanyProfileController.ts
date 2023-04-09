import { Request, Response } from 'express'

import { ICompany } from '@/app/interfaces/models/Company'
import CompanyModel from '@/app/models/CompanyModel'

const getCompanyProfile = async (req: Request, res: Response) => {
	try {
		const companyId = req.user?.userId
		console.log('hey')
		const company: ICompany | null = await CompanyModel.findById(companyId)

		if (!company) {
			return res.status(404).json({ message: 'Company not found.' })
		}

		return res.status(200).json({ company })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const getCompanyPublicProfile = async (req: Request, res: Response) => {
	try {
		const companyId = req.params.companyId

		const company: ICompany | null = await CompanyModel.findById(companyId)

		if (!company) {
			return res.status(404).json({ message: 'Company not found.' })
		}

		const { name, location, overallRating, type, jobTypes, currentPostings } =
			company

		return res
			.status(200)
			.json({ name, location, overallRating, type, jobTypes, currentPostings })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

export const editCompanyProfile = async (req: Request, res: Response) => {
	try {
		const companyId = req.user?.userId

		const allowedFields = ['name', 'description']

		const updateData: any = {}

		allowedFields.forEach((field) => {
			if (req.body[field] !== undefined) {
				updateData[field] = req.body[field]
			}
		})

		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({ message: 'No valid fields to update.' })
		}

		const updatedCompany = await CompanyModel.findOneAndUpdate(
			{ _id: companyId },
			{ $set: updateData },
			{ new: true }
		)

		res
			.status(200)
			.json({ message: 'Profile updated successfully.', updatedCompany })
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating the company profile.',
			error,
		})
	}
}

const CompanyProfileController = {
	getCompanyProfile,
	getCompanyPublicProfile,
	editCompanyProfile,
}

export default CompanyProfileController
