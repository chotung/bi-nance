const { Router } = require('express')
const apiController = require('../controller/apiController')
const router = Router()

router.get('/', apiController.getAllsymbols)
// router.get('/', (req, res) => {
//   console.log('hitting route');
// })




// app.get('/symbols', async (req, res) => {
//   const data = await getSymbols()
//   res.json(data)
// })

// app.get('/symbols/:name', async (req, res) => {
//   // console.log(req.params.name);
//   // const foundCompany = await findCompany(req.params.name)
//   const foundCompany = await getCurrentPrice(req.params.name)
//   // console.log(foundCompany);
//   res.json(foundCompany)
// })

// app.get('/symbols/:name/historical/:date', async (req, res) => {
//   console.log(req.params);
//   const companyHistory = await getHistoricalPrice(req.params)
//   res.json(companyHistory)
// })



module.exports = router