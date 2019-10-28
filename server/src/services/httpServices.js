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

  static async getCurrentPrice(comp) {
    try {
      const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${comp}`)
      return res.data
    } catch (err) {
      throw err
    }
  }

  static async getHistoricalPrice(comp) {
    // console.log(comp);
    const { company, date } = comp
    try {
      const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company}?timeseries=${date}`)
      // console.log(res.data);
      return res.data
    } catch (err) {
      throw err
    }
  }

}

module.exports = financialModelingPrep