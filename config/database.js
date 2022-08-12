const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoClient = require('mongoose')

// setup connect mongodb by mongoose
mongoClient.connect('mongodb://localhost/NodeJSApi', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ Connected database from mongodb.'))
    .catch((error) => console.error(`❌ Connect database is failed with error which is ${error}`))

const app = express()

const userRoute = require('../routes/login.route')
// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', userRoute)

// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK!'
    })
})
