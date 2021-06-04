const response = require('./helper/response')
const { getAllTransactionModel, postTransactionModel } = require('./model')

module.exports = {
  getAllTransaction: async (req, res) => {
    try {
      const result = await getAllTransactionModel()
      return response.response(res, 200, 'Success get all transaction', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request!')
    }
  },
  postTransaction: async (req, res) => {
    try {
      const result = await postTransactionModel(req.body)
      return response.response(res, 200, 'Success post transaction', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request!')
    }
  }
}
