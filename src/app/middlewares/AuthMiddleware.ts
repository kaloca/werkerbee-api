import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import { AUTH_SECRET } from '../util/secrets'
interface MyJwtPayload extends JwtPayload {
	userId: string
}

export const requireAuth = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization

	if (!authHeader) {
		return res
			.status(401)
			.json({ message: 'No authorization header provided.' })
	}

	const token = authHeader.split(' ')[1]

	try {
		const base64SecretKey = AUTH_SECRET as string
		const secretKey = Buffer.from(base64SecretKey, 'base64').toString('utf8')
		const decodedToken = jwt.verify(token, secretKey) as MyJwtPayload
		;(req as any).user = decodedToken

		if (req.user?.userId && req.user?.userId !== decodedToken.userId) {
			return res.status(403).json({
				message: 'User ID from token does not match user ID from request.',
			})
		}

		next()
	} catch (error) {
		console.log(error)
		return res.status(401).json({ message: 'Invalid or expired token.' })
	}
}
