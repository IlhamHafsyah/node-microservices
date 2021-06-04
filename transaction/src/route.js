const router = require('express').Router()

const { getAllTransaction, postTransaction } = require('./controller')

router.get('/', getAllTransaction)
router.post('/', postTransaction)

module.exports = router
