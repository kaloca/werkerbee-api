import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { IWorker } from '@/app/interfaces/models/Worker'
import WorkerModel from '@/app/models/WorkerModel'

import { AUTH_SECRET } from '@/app/util/secrets'
import { ICompany } from '@/app/interfaces/models/Company'
import CompanyModel from '@/app/models/CompanyModel'

const login = async (req: Request, res: Response) => {
	try {
		console.log(req.body)
		const { email, password } = req.body

		const worker: IWorker | null = await WorkerModel.findOne({ email }).exec()
		const company: ICompany | null = await CompanyModel.findOne({
			email,
		}).exec()

		const user = worker || company

		if (!user) return res.status(400).send('user not found')

		const isCorrectPassword = await bcrypt.compare(
			password,
			user.hashedPassword
		)

		if (!isCorrectPassword) return res.status(400).send('incorrect password')

		const base64AuthSecret = AUTH_SECRET as string
		const authSecret = Buffer.from(base64AuthSecret, 'base64').toString('utf8')
		const token = await jwt.sign({ userId: user._id }, authSecret)

		return res
			.status(200)
			.json({ token, type: worker ? 'worker' : 'company', id: user._id })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const LoginController = { login }

export default LoginController
