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

const CertificationController = { addCertification, getCertifications }

export default CertificationController
