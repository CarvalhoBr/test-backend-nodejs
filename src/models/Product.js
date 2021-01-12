const mongoose = require('../database/connection')

const productsSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false,
	},
	price: {
		type: mongoose.Schema.Types.Decimal128,
		required: true
	},
	category: {
		type: String,
		required: false
	}
})

const Product = mongoose.model('Product', productsSchema)

module.exports = Product