import path from 'path'
import multer from 'multer'
import multerS3 from 'multer-s3'

import s3 from '@/config/awsConfig'

const upload = multer({
	storage: multerS3({
		s3,
		acl: 'public-read',
		bucket: process.env.AWS_BUCKET!,
		contentType: multerS3.AUTO_CONTENT_TYPE,
		key: (req, file, cb) => {
			const fileName = `${Date.now()}_${Math.round(Math.random() * 1e9)}`
			cb(null, `${fileName}${path.extname(file.originalname)}`)
		},
	}),
})

export default upload
