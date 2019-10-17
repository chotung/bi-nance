const axios = require('axios')


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

// LIST of companies to populate the search 
const getSymbols = async () => {
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
  // add to database and if exist continue
  console.log(res.data)
}

// getSymbols()


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
  // get the symbol
  let company = await findCompany('AAPL')
  // pass it to the api
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.symbol}?serietype=line`)
  console.log(res.data)
  // send data back to the client GET
}

getHistoricalPrice()