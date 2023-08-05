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
CertificationRouter.put(
	'/certification/:certificationId',
	controllers.CertificationController.updateCertification
)
CertificationRouter.delete(
	'/certification/:certificationId',
	controllers.CertificationController.deleteCertification
)

export default CertificationRouter
