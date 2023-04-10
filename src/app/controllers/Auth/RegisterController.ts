import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import WorkerModel from '@/app/models/WorkerModel'
import CompanyModel from '@/app/models/CompanyModel'

const checkExistingEmail = async (
	email: string,
	res: Response
): Promise<boolean> => {
	const worker = await WorkerModel.findOne({ email })
	const company = await CompanyModel.findOne({ email })

	if (worker || company) {
		res
			.status(400)
			.json({ message: 'an account with this email already exists' })
		return true
	}
	return false
}

const registerWorker = async (req: Request, res: Response) => {
	try {
		const {
			name,
			phoneNumber,
			birthday,
			email,
			location,
			ssn,
			jobTypes,
			password,
		} = req.body

		if (await checkExistingEmail(email, res)) return

		const hashedPassword = await bcrypt.hash(password, 10)

		const newWorker = new WorkerModel({
			name,
			phoneNumber,
			birthday,
			email,
			location,
			ssn,
			jobTypes,
			hashedPassword,
		})

		await newWorker.save()

		return res.status(200).json({ message: 'New worker created successfuly' })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const registerCompany = async (req: Request, res: Response) => {
	try {
		const {
			name,
			email,
			username,
			location,
			type,
			password,
			jobTypes,
			address,
		} = req.body

		console.log(req.body)

		if (await checkExistingEmail(email, res)) return

		const hashedPassword = await bcrypt.hash(password, 10)

		const newCompany = new CompanyModel({
			name,
			email,
			description: 'hey',
			username,
			location,
			type,
			address,
			jobTypes,
			hashedPassword,
		})

		await newCompany.save()

		return res.status(200).json({ message: 'New company created successfuly' })
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

const RegisterController = { registerCompany, registerWorker }

export default RegisterController
