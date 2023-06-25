import { Schema, model } from 'mongoose'

import { ICertification } from '../interfaces/models/Certification'

export const CertificationSchema: Schema = new Schema({
	certification: { type: String, required: true },
	organization: { type: String, required: true },
})

export default model<ICertification>('Certification', CertificationSchema)
