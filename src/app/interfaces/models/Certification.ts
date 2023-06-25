import { Document } from 'mongoose'

export interface ICertification extends Document {
	certification: string
	organization: string
}
