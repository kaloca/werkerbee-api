import { Request } from 'express'

declare module 'express' {
	export interface Request {
		user?: {
			id: string
			[key: string]: any
		}
	}
}
