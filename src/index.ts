import app from './app'

// Get port from environment and store in Express.
const port = process.env.PORT || 3000

import crypto from 'crypto'

const secretKey = crypto.randomBytes(32).toString('base64')
console.log('Generated secret key:', secretKey)
// Create HTTP server.
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
