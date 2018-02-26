// All our requires/dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorHandler = require('errorhandler')
const hbs = require('express-handlebars')

const apiRouter = ('./api/api')

// Creating our Application
const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(errorHandler())

app.use('/api', apiRouter);

// Listen on port 3000
app.listen( PORT , () => {

  console.log( 'listening on port: ' + PORT )

})

module.exports = app;
