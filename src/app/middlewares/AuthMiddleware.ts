import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { AUTH_SECRET } from '../util/secrets'

export const requireAuth = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log('first')
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
		const decodedToken = jwt.verify(token, secretKey)
		;(req as any).user = decodedToken
		next()
	} catch (error) {
		return res.status(401).json({ message: 'Invalid or expired token.' })
	}
}
