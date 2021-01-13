const routes = require('express').Router()
const productsController = require('./controllers/productsController')

routes.get('/products', productsController.list)
routes.post('/products', productsController.create)
routes.put('/products/category', productsController.updateCategory)
routes.put('/products/:id', productsController.update)
routes.delete('/products/:id', productsController.destroy)

module.exports = routes