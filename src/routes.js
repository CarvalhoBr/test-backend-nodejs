const routes = require('express').Router()
const yup = require('yup')
const Product = require('./models/Product')

routes.get('/products', async (req, res) => {

	const products = await Product.find({})
	console.log(products)

	return res.json(products)
})

routes.get('/', (req, res) => {
	return res.json({Message: 'Hello from routes'})
})

module.exports = routes