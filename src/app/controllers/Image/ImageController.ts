import { Request, Response } from 'express'

const uploadImage = (req: Request, res: Response) => {
	res.json({ file: req.file })
}

export default { uploadImage }
