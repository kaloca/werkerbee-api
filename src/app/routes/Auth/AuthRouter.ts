import { Router } from 'express'

import controllers from '../../controllers'
import { requireAuth } from '../../middlewares/AuthMiddleware'

const AuthRouter = Router()

AuthRouter.post('/register', controllers.RegisterController)
AuthRouter.get('/login', controllers.LoginController)
AuthRouter.get('/auth/test', requireAuth, (req, res) => {
	res.status(200).json({ message: 'Access granted.' })
})

export default AuthRouter
