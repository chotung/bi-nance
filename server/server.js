const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 4000

// Routes REFACTOR LATER

// Get all company symbols/name/closing price
app.get('/symbols', async (req, res) => {
  const data = await getSymbols()
  res.json(data)
})

app.get('/symbols/:name', async (req, res) => {
  // console.log(req.params.name);
  // const foundCompany = await findCompany(req.params.name)
  const foundCompany = await getCurrentPrice(req.params.name)
  // console.log(foundCompany);
  res.json(foundCompany)
})

app.get('/symbols/:name/historical/:date', async (req, res) => {
  console.log(req.params);
  const companyHistory = await getHistoricalPrice(req.params)
  res.json(companyHistory)
})


// API FUNCTIONS

// LIST of companies to populate the search 
const getSymbols = async () => {
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
  return res.data
}

const getCurrentPrice = async (company) => {

  const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}`)
  return res.data
}

const getHistoricalPrice = async (company) => {
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.name}?timeseries=${company.date}`)
  return res.data
}

app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Bi-ance"
}))

app.listen(port, console.log(`Server is running on port ${port}`))