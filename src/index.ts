import app from './app'

// Get port from environment and store in Express.
const port = process.env.PORT || 3000

// Create HTTP server.
app.listen(port, () => console.log(`Listening at port ${port}`))
