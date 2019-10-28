const { Router } = require('express')
const apiController = require('../controller/apiController')
const router = Router()

router.get('/', apiController.getAllsymbols)
router.get('/price/:company', apiController.getCurrPrice)
router.get('/price/:company/:date', apiController.getHistPrice)




module.exports = router