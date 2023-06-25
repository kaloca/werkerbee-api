import controllers from '@/app/controllers'
import { Router } from 'express'

const CertificationRouter = Router()

CertificationRouter.post(
	'/certification',
	controllers.CertificationController.addCertification
)
CertificationRouter.get(
	'/certification',
	controllers.CertificationController.getCertifications
)

export default CertificationRouter
