import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const CompanyRouter = Router()

CompanyRouter.get(
	'/company/:companyId/profile',
	requireAuth,
	controllers.GetCompanyProfileController
)
CompanyRouter.get(
	'/company/:companyId',
	controllers.GetCompanyPublicProfileController
)

export default CompanyRouter
