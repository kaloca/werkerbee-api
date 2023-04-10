import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const CompanyRouter = Router()

CompanyRouter.get(
	'/company/settings/profile',
	requireAuth,
	controllers.CompanyProfileController.getCompanyProfile
)
CompanyRouter.get(
	'/company/:username',
	controllers.CompanyProfileController.getCompanyPublicProfile
)
CompanyRouter.put(
	'/company/profile',
	requireAuth,
	controllers.CompanyProfileController.editCompanyProfile
)

export default CompanyRouter
