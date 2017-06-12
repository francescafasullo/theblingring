const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:cart`)

const {Cart, CartProduct} = require('APP/db')
const cart = require('express').Router()

cart.get('/:userId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(cart => res.send(cart))
  .catch(next)
})

cart.post('/:userId/:productId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(cart => {
    return CartProduct.create({
      cart_id: cart.id,
      product_id: req.params.productId,
      quantity: 1
    })
  })
  .then(item => res.send(item))
  .catch(next)
})

module.exports = cart
