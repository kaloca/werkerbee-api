import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Worker } from '../../interfaces/models/Worker'
import WorkerModel from '../../models/WorkerModel'

import { AUTH_SECRET } from '../../util/secrets'

const LoginController = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body

		const user: Worker | null = await WorkerModel.findOne({ email }).exec()

		if (!user) return res.status(400).send('user not found')

		const isCorrectPassword = await bcrypt.compare(
			password,
			user.hashedPassword
		)

		if (!isCorrectPassword) return res.status(400).send('incorrect password')

		const base64AuthSecret = AUTH_SECRET as string
		const authSecret = Buffer.from(base64AuthSecret, 'base64').toString('utf8')
		const token = await jwt.sign({ userId: user._id }, authSecret)

		return res.status(200).send(token)
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

export default LoginController
