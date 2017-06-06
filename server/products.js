'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
        Product.findAll()
        .then(products => res.json(products))
        .catch(next))

  .get('/:productid', (req, res, next) => {
    const productId = req.params.productid
    Product.findById(productId)
    .then(product => res.json(product))
    .catch(next)
  })

  .get('/:productid/reviews', (req, res, next) => {
    const productId = req.params.productid
    Review.findAll({
      where: {
        product_id: productId
      }
    })
      .then(reviews => res.json(reviews))
      .catch(next)
  })
