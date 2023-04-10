const swaggerAutogen = require('swagger-autogen')()

const doc = {
	info: {
		title: 'WerkerBee API',
		description: 'Description',
	},
	host: 'localhost:3000',
	schemes: ['http'],
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/app/routes/index.ts']

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc)
