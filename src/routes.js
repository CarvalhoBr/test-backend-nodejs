const routes = require('express').Router()
const yup = require('yup')
const Product = require('./models/Product')

routes.get('/products', async (req, res) => {

	const allowedFilters = yup.object().shape({
		title: yup.string(),
		category: yup.string()
	}).noUnknown()

	const filters = req.query
	console.log(filters)

	allowedFilters.validate(filters, { stripUnknown: false })
		.catch(err => 
			res.status(400).json({error: 'Os filtros especificados são inválidos'})
		)

	const products = await Product.find(filters)
	console.log(products)

	return res.json(products)
})


routes.post('/products', (req, res) => {

	const productSchema = yup.object().shape({
		title: yup.string().required(),
		description: yup.string(),
		price: yup.number().required(),
		category: yup.string()
	}).noUnknown()

	const product = req.body

	productSchema.validate(product, { stripUnknown: false })
		.then(() => {
			const newProduct = new Product(product)

			newProduct.save()

			return res.json(newProduct)
		})
		.catch((err) => {
			return res.status(400).json({error: 'Incorrect format', message: err.message})
		})
})

module.exports = routes