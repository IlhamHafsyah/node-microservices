const router = require('express').Router()
const product = require('./route')

router.use('/product', product)

module.exports = router
