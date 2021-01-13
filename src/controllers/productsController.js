const Product = require("../models/Product")
const yup = require('yup')

const productsController = {

	async list(req, res){
		const allowedFilters = yup.object().shape({
			title: yup.string(),
			category: yup.string()
		}).noUnknown()
	
		const filters = req.query
	
		allowedFilters.validate(filters, { stripUnknown: false })
			.catch(err => 
				res.status(400).json({error: 'Os filtros especificados são inválidos'})
			)
	
		const products = await Product.find(filters)
	
		return res.json(products)
	},

	async create(req, res){
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
	},

	async updateCategory(req, res){
		const { id, category } = req.body

		const product = await Product.updateOne({ _id: id }, {$set: { category }})
	
		return res.json(product)
	},

	async update(req, res){
		const allowedParameters = yup.object().shape({
			title: yup.string(),
			description: yup.string(),
			price: yup.number(),
			category: yup.string()
		}).noUnknown()
	
		const params = req.body
		const { id } = req.params
	
		allowedParameters.validate(params, { stripUnknown: false })
			.then(()  => {
				return Product.updateOne({_id: id}, {$set: params})
					.then(data => res.json(data))
			})
			.catch(err => 
				res.status(400).json({
					erro: err.type,
					message: err.message
				})
			)
	},

	async destroy(req, res){
		const { id } = req.params

		return Product.deleteOne({_id: id})
			.then(data => res.json(data))
			.catch(() => res.status(500).json({erro: 'Não foi possível processar sua solicitação'}))
	}
}

module.exports = productsController