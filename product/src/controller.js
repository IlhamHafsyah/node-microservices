const response = require('./helper/response')
const {
  getAllProductModel,
  postProductModel,
  updateProductModel,
  deleteProductModel,
  getProductByIdModel
} = require('./model')

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const result = await getAllProductModel()
      return response.response(res, 200, 'Success get all product', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request!')
    }
  },
  getProductById: async (req, res) => {
    try {
      const result = await getProductByIdModel(req.params.id)
      return response.response(res, 200, 'Success get all product', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request!')
    }
  },
  postProduct: async (req, res) => {
    try {
      const result = await postProductModel(req.body)
      return response.response(res, 200, 'Success post product', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request!')
    }
  },
  updateProduct: async (req, res) => {
    try {
      const result = await updateProductModel(req.body, req.params.id)
      return response.response(res, 200, 'Success Update Product', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await deleteProductModel(req.params.id)
      return response.response(
        res,
        200,
        `Success Delete Product with id = ${req.params.id}`
      )
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  }
}
