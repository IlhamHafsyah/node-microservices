const router = require('express').Router()

const {
  getAllProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  getProductById
} = require('./controller')

router.get('/', getAllProduct)
router.get('/:id', getProductById)
router.post('/', postProduct)
router.patch('/', updateProduct)
router.delete('/', deleteProduct)

module.exports = router
