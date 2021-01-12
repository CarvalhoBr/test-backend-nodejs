const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

module.exports = mongoose