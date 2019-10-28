const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./src/routes/apiRoutes.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 4000

// Routes REFACTOR LATER

// Get all company symbols/name/closing price


app.use('/api/v1/companies', apiRoutes)

// API FUNCTIONS



app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Bi-ance"
}))

app.listen(port, console.log(`Server is running on port ${port}`))