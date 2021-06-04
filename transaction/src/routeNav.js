const router = require('express').Router()
const transaction = require('./route')

router.use('/transaction', transaction)

module.exports = router
