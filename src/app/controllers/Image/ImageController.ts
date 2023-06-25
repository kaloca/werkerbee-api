import { Request, Response } from 'express'

import { ICompany } from '@/app/interfaces/models/Company'
import { IWorker } from '@/app/interfaces/models/Worker'
import CompanyModel from '@/app/models/CompanyModel'
import WorkerModel from '@/app/models/WorkerModel'

const uploadImage = (req: Request, res: Response) => {
	res.json({ file: req.file })
}

const updateProfilePicture = async (req: Request, res: Response) => {
	try {
		const id = req.user?.userId

		const worker: IWorker | null = await WorkerModel.findById(id)
		const company: ICompany | null = await CompanyModel.findById(id)

		const user = worker || company

		if (!user)
			return res.status(404).json({ message: 'No user exists with this id' })

		const location = (req.file as any).location

		if (!location)
			return res.status(500).json({ message: 'Something went wrong' })

		user.profilePicture = location
		await user.save()

		return res
			.status(200)
			.json({ message: 'Profile picture updated successfuly' })
	} catch (error) {
		return res.status(500).json({ message: 'Something went wrong', error })
	}
}

export default { uploadImage, updateProfilePicture }
