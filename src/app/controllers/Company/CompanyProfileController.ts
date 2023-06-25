import { Request, Response } from 'express'
import mongoose from 'mongoose'

import { ICompany } from '@/app/interfaces/models/Company'
import { IJobPosting } from '@/app/interfaces/models/JobPosting'

import CompanyModel from '@/app/models/CompanyModel'
import JobPostingModel from '@/app/models/JobPostingModel'
import NotificationModel from '@/app/models/NotificationModel'
import { INotification } from '@/app/interfaces/models/Notification'

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
		const username = req.params.username

		const company: ICompany | null = await CompanyModel.findOne({ username })

		if (!company) {
			return res.status(404).json({ message: 'Company not found.' })
		}

		const { name, location, overallRating, type, jobTypes } = company

		return res
			.status(200)
			.json({ name, location, overallRating, type, jobTypes })
	} catch (error) {
		console.log(error)
		return res.sendStatus(500)
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

const getCompanyJobPosts = async (req: Request, res: Response) => {
	try {
		const companyUsername = req.params.username

		const company: ICompany | null = await CompanyModel.findOne({
			username: companyUsername,
		})

		if (!company) {
			return res.status(404).json({ message: 'Company not found.' })
		}

		const companyId = company.id

		const jobPostingsWithJobs = await JobPostingModel.aggregate([
			{
				$match: {
					company: new mongoose.Types.ObjectId(companyId),
					$or: [{ start: { $gte: new Date() } }, { end: { $gte: new Date() } }],
				},
			},
			{
				$lookup: {
					from: 'jobs',
					localField: '_id',
					foreignField: 'jobPostingId',
					as: 'job',
				},
			},
			{
				$unwind: {
					path: '$job',
					preserveNullAndEmptyArrays: true,
				},
			},
			{
				$project: {
					...Object.fromEntries(
						Object.keys(JobPostingModel.schema.paths).map((path) => [path, 1])
					), // include all fields from JobPosting
					'job._id': 1,
					'job.status': 1,
				},
			},
			{
				$addFields: { applications: '$applications' },
			},
			{
				$sort: { createdAt: -1 },
			},
		])

		if (!jobPostingsWithJobs) {
			return res.status(404).json({ message: 'No job postings.' })
		}

		return res.status(200).json(jobPostingsWithJobs)
	} catch (error) {
		console.log(error)
		return res.sendStatus(500)
	}
}

const getStatus = async (req: Request, res: Response) => {
	try {
		const companyId = req.user?.userId
		console.log(companyId)

		const company: ICompany | null = await CompanyModel.findById(companyId)

		if (!company) {
			return res.status(404).json({ message: 'Company not found.' })
		}

		const unreadNotification: INotification | null =
			await NotificationModel.findOne({
				user: {
					id: companyId,
					type: 'company',
				},
				readStatus: false,
			})

		return res.status(200).json({
			unreadNotification: unreadNotification ? true : false,
			profilePicture: company.profilePicture,
		})
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const CompanyProfileController = {
	getCompanyProfile,
	getCompanyPublicProfile,
	editCompanyProfile,
	getCompanyJobPosts,
	getStatus,
}

export default CompanyProfileController
