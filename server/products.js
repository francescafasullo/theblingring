'use strict'

const db = require('APP/db')
const Product = db.model('product')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
        Product.findAll()
        .then(products => res.json(products))
        .catch(next))

  .get('/:productId', (req, res, next) => {
    const productId = req.params.productid
    Product.findById(productId)
    .then(product => res.json(product))
    .catch(next)
  })

  .get('/:productId/reviews', (req, res, next) => {
    const productId = req.params.productId
    Review.findAll({
      where: {
        product_id: productId
      }
    })
      .then(reviews => res.json(reviews))
      .catch(next)
  })
