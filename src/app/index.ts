import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import compression from 'compression'
import helmet from 'helmet'

import routes from './routes'

import { MONGODB_URI, SESSION_SECRET } from './util/secrets'

const app = express()

app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

const mongoUrl = MONGODB_URI as string
mongoose.connect(mongoUrl)

export default app
