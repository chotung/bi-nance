const Util = require('../../util/Util')
const httpServices = require('../services/httpServices')

const util = new Util()

class apiController {
  static async getAllsymbols(req, res) {
    try {
      const allCompanies = await httpServices.getSymbols()
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
  
  static async getCurrPrice(req, res) {
    const { company } = req.params
    try {
      const currentPrice = await httpServices.getCurrentPrice(company)
      if(Object.keys(currentPrice).length !== 0 && currentPrice.constructor === Object) {
        util.setSuccess(200, 'Price for a company', currentPrice)
      } else {
        util.setSuccess(200, 'No Price')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async getHistPrice(req, res) {
    const company =  req.params
    // console.log(company);
    try {
      const historicalPrice = await httpServices.getHistoricalPrice(company)
      if (Object.keys(historicalPrice).length !== 0 && historicalPrice.constructor === Object) {
        util.setSuccess(200, 'Historical Price', historicalPrice)
      } else {
        util.setSuccess(200, 'No Historical Price')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

}


module.exports = apiController
