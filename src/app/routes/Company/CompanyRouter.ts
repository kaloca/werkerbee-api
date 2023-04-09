import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const CompanyRouter = Router()

CompanyRouter.get(
	'/company/:companyId/profile',
	requireAuth,
	controllers.CompanyProfileController.getCompanyProfile
)
CompanyRouter.get(
	'/company/:companyId',
	controllers.CompanyProfileController.getCompanyPublicProfile
)

export default CompanyRouter
