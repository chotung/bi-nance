const axios = require('axios')
const express = require('express')

const app = express()


// FAKE DATABASE

// const db = [
//   {
//     symbol: 'AAPL',
//     name: 'APPLE',
//     price: 3.33
//   },
//   {
//     symbol: 'AMZ',
//     name: 'AMAZON',
//     price: 100.69
//   },
//   {
//     symbol: 'SBUX',
//     name: 'STARBUCKS',
//     price: 100.99
//   }
// ]

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
  // add to database and if exist continue
  // console.log(res.data)
  return res.data
}

const getCurrentPrice = async (company) => {

  const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}`)
  return res.data
}

const getHistoricalPrice = async (company) => {
  console.log("company", company,);
  // const date = 30
  // let company = await findCompany('AAPL')
  // const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.symbol}?serietype=line`)
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.name}?timeseries=${company.date}`)
  return res.data
  // send data back to the client GET
}

app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Bi-ance"
}))

app.listen(3000, console.log(`Server is running on port 3000`))