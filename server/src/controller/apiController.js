const Util = require('../../util/Util')
const httpServices = require('../services/httpServices')

const util = new Util()

class apiController {
  static async getAllsymbols(req, res) {
    try {
      const allCompanies = await httpServices.getSymbols()
      // const allCompanies = await res.data
      // console.log(allCompanies);
      if (allCompanies.length > 0) {
        util.setSuccess(200, 'Companies Retrieved', allCompanies)
      } else {
        util.setSuccess(200, 'No companies')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  // static async getCurrentPrice(company) {
  //     const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}`)
  //     return res.data
  // }

  // static async getHistoricalPrice() {
  //     const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.name}?timeseries=${company.date}`)
  //     return res.data
  // }

}


module.exports = apiController








// // static async getCurrentPrice(company) {
// //   const res = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${company}`)
// //   return res.data
// // }

// // static async getHistoricalPrice() {
// //   const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${company.name}?timeseries=${company.date}`)
// //   return res.data
// // }
