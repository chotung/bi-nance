const axios = require('axios')
const express = require('express')

const app = express()


// FAKE DATABASE

const db = [
  {
    symbol: 'AAPL',
    name: 'APPLE',
    price: 3.33
  },
  {
    symbol: 'AMZ',
    name: 'AMAZON',
    price: 100.69
  },
  {
    symbol: 'SBUX',
    name: 'STARBUCKS',
    price: 100.99
  }
]



// TAKES SYMBOL AND DOES DB CALL
const findCompany = async (sym) => {
  // Handle sanitizing user input
  // Look through db for selected stock
  let selectedComp 
  db.forEach(company => {
    if(company.name === sym || company.symbol === sym) {
      // console.log(company)
      selectedComp = company
    }
  })
  // console.log(selectedComp)
  // give to api call
  return selectedComp
}

// find company based on name or ticker symbol
// findCompany('APPLE')
// findCompany('AAPL')


// LIST of companies to populate the search 
const getSymbols = async () => {
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
  // add to database and if exist continue
  console.log(res.data)
}

// getSymbols()


const getCurrentPrice = async () => {
  // get the symbol
  let company = await findCompany('AAPL')
  // pass it to the api
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company.symbol}`)
  console.log(res.data)
  // send data back to the client GET
}


// getCurrentPrice()

const getHistoricalPrice = async () => {
  // get date from POST req
  const date = 30
  // get the symbol
  let company = await findCompany('AAPL')
  // pass it to the api
  // const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.symbol}?serietype=line`)
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.symbol}?timeseries=${date}`)
  console.log(res.data)
  // send data back to the client GET
}

// getHistoricalPrice()

app.get('*', (req, res) => res.status.send({
  message: "Welcome to Bi-ance"
}))

app.listen(3000, console.log(`Server is running on port 3000`))