const axios = require('axios')


const getSymbols = async (sym) => {
  const res = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
  console.log(res.data)
}


getSymbols()