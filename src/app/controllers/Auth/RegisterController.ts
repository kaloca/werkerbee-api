import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import WorkerModel from '../../models/WorkerModel'

const RegisterController = async (req: Request, res: Response) => {
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

		return res.status(200).send('New worker created successfuly')
	} catch (error) {
		console.log(error)
		return res.sendStatus(400)
	}
}

export default RegisterController
