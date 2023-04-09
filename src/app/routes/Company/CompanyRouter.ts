import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const CompanyRouter = Router()

CompanyRouter.get(
	'/company/profile',
	requireAuth,
	controllers.CompanyProfileController.getCompanyProfile
)
CompanyRouter.get(
	'/company/:companyId',
	controllers.CompanyProfileController.getCompanyPublicProfile
)
CompanyRouter.put(
	'/company/profile',
	requireAuth,
	controllers.CompanyProfileController.editCompanyProfile
)

export default CompanyRouter
