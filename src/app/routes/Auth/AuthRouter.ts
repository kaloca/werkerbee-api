import { Router } from 'express'

import controllers from '@/app/controllers'
import { requireAuth } from '@/app/middlewares/AuthMiddleware'

const AuthRouter = Router()

AuthRouter.post(
	'/register/worker',
	controllers.RegisterController.registerWorker
)
AuthRouter.post(
	'/register/company',
	controllers.RegisterController.registerCompany
)
AuthRouter.post('/login', controllers.LoginController.login)
AuthRouter.get('/auth/test', requireAuth, (req, res) => {
	res.status(200).json({ message: 'Access granted.' })
})

export default AuthRouter
