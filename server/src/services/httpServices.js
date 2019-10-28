const axios = require('axios')



class financialModelingPrep {

  static async getSymbols() {
    try {
      const res = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
      return res.data.symbolsList
    } catch (err) {
      throw err
    }
  }

  // static async getCurrentPrice(company) {
  //   try {
  //     const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}`)
  //     return res.data
  //   } catch (err) {
  //     throw err
  //   }
  // }

  // static async getHistoricalPrice() {
  //   try {
  //     const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.name}?timeseries=${company.date}`)
  //     return res.data
  //   } catch (err) {
  //     throw err
  //   }
  // }

}

module.exports = financialModelingPrep