import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'
import mongoose from 'mongoose'

import { MONGODB_URI, SESSION_SECRET } from './util/secrets'

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Middleware to delay all requests by 3 seconds
// app.use((req, res, next) => {
// 	setTimeout(next, 3000)
// })

// Health Check
app.get('/', (_req: Request, res: Response) => {
	return res.send('Express Typescript on Vercel')
})

app.use(routes)

const mongoUrl = MONGODB_URI as string
mongoose.connect(mongoUrl)

export default app
