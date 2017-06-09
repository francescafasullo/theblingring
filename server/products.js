'use strict'

const db = require('APP/db')
const Product = db.model('product')
const Review = db.model('review')
const Category = db.model('category')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))

  .get('/categories', (req, res, next) =>
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next))

  .get('/categories/:categoryId', (req, res, next) =>
    Product.findAll({where: {category_id: req.params.categoryId}})
    .then(products => res.json(products))
    .catch(next))

  .get('/:productId', (req, res, next) => {
    const productId = req.params.productId
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
