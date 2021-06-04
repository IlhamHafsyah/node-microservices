const client = require('./connection')

module.exports = {
  getAllProductModel: () => {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM product', (error, result) => {
        !error ? resolve(result.rows) : reject(new Error(error))
      })
    })
  },
  getProductByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      client.query(
        `SELECT * FROM product WHERE id = ${id}`,
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  postProductModel: (data) => {
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO product (vansName, vansPrice) VALUES ($1, $2) RETURNING id, vansName, vansPrice',
        [data.name, data.price],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  updateProductModel: (data, id) => {
    return new Promise((resolve, reject) => {
      client.query(
        'UPDATE product SET vansName = $1, vansPrice = $2 WHERE id = $3 RETURNING id, vansName, vansPrice',
        [data.name, data.price, id],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  deleteProductModel: (id) => {
    return new Promise((resolve, reject) => {
      client.query('DELETE FROM data WHERE id = $1', [id], (error, result) => {
        !error ? resolve(result.rows) : reject(new Error(error))
      })
    })
  }
}
