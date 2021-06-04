const client = require('./connection')
const axios = require('axios')

module.exports = {
  getAllTransactionModel: () => {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT transactionid, totaltransaction, createdat FROM transaction',
        async (error, result) => {
          const productNames = []
          const productName = []
          const newResult = []
          let vansname = ''
          for (let i = 0; i < result.rows.length; i++) {
            productNames.push(
              await axios.get(
                'http://localhost:3000/product/' + result.rows[i].transactionid
              )
            )
            productName.push(productNames[i].data.data[0].vansname)
            vansname = productName[i]
            const data = { ...result.rows[i], vansname }
            newResult.push(data)
          }
          !error ? resolve(newResult) : reject(new Error(error))
        }
      )
    })
  },
  postTransactionModel: (data) => {
    const createdAt = new Date()
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO transaction (productid, totaltransaction, createdat) VALUES ($1, $2, $3) RETURNING transactionid, productid, totaltransaction, createdat',
        [data.productId, data.totalTransaction, createdAt],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  }
}
