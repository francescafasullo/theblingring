'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
        Product.findAll() // indentation compared to 15? -- KHAM
        .then(products => res.json(products))
        .catch(next)
  )
  // param('productid', (req, res, next, id) => {
  //   //do the things
  //   // req.product = foundProduct
  //   // call next
  // })
  // /1?reviews=true
  // req.query.reviews
  .get('/:productid', (req, res, next) => { // camelCase your id -- KHAM
    const productId = req.params.productid // router.param -- this will dry out your code eventually if you do a put/delete for a product -- KHAM
    Product.findById(productId) // eagerly load your reviews (include statment). This means you have to have the association defined the right way. You can accomplish this inline here or define a scope in your model, and you can include a query in your route -- KHAM 
    .then(product => res.json(product)) // what if there is no error, but no product. product === undefined; send 404 -- KHAM
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
