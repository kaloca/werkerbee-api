import { Request, Response } from 'express'

import CertificationModel from '@/app/models/CertificationModel'
import { ICertification } from '@/app/interfaces/models/Certification'

const addCertification = async (req: Request, res: Response) => {
	try {
		const certification = new CertificationModel(req.body)
		await certification.save()
		res
			.status(201)
			.json({ message: 'Certification added successfully.', certification })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'An error occurred while adding the certification.',
			error,
		})
	}
}

const getCertifications = async (_req: Request, res: Response) => {
	try {
		const certifications: ICertification[] = await CertificationModel.find()
		// const certificationsArray = certifications.map((c) => c.certification)
		res.status(200).json(certifications)
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while fetching certifications.',
			error,
		})
	}
}

const updateCertification = async (req: Request, res: Response) => {
	try {
		const certificationId = req.params.certificationId

		const allowedFields = ['certification', 'organization']

		const updateData: any = {}

		allowedFields.forEach((field) => {
			if (req.body[field] !== undefined) {
				updateData[field] = req.body[field]
			}
		})

		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({ message: 'No valid fields to update.' })
		}

		const updatedCertification = await CertificationModel.findOneAndUpdate(
			{ _id: certificationId },
			{ $set: updateData },
			{ new: true }
		)

		res.status(200).json({
			message: 'Certification updated successfully.',
			updatedCertification,
		})
	} catch (error) {
		res.status(500).json({
			message: 'An error occurred while updating certification.',
			error,
		})
	}
}

const deleteCertification = async (req: Request, res: Response) => {
	const { certificationId } = req.params

	try {
		const deletedCertification = await CertificationModel.findOneAndDelete({
			_id: certificationId,
		})

		if (!deletedCertification) {
			return res.status(404).json({ error: 'Certification not found' })
		}

		res.status(200).json(deletedCertification)
	} catch (error) {
		res.status(400).json({ error: (error as Error).message })
	}
}

const CertificationController = {
	addCertification,
	getCertifications,
	updateCertification,
	deleteCertification,
}

export default CertificationController
