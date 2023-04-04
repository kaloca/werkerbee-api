import { Request, Response } from 'express'

import { ICompany } from '@/app/interfaces/models/Company'
import CompanyModel from '@/app/models/CompanyModel'

export const GetCompanyProfileController = async (
	req: Request,
	res: Response
) => {
	try {
		const companyId = req.params.companyId

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

export const GetCompanyPublicProfileController = async (
	req: Request,
	res: Response
) => {
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
