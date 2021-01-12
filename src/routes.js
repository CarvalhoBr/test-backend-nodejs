const routes = require('express').Router()

routes.get('/', (req, res) => {
	return res.json({Message: 'Hello from routes'})
})

module.exports = routes