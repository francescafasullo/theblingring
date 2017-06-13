const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:cart`)

const {Cart, CartProduct} = require('APP/db')
const cart = require('express').Router()

// get a cart
cart.get('/:userId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    },
    include: [{ all: true }]
  })
  .then(cart => res.send(cart))
  .catch(next)
})

// add item to cart
cart.post('/:userId/:productId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(cart => {
    return [CartProduct.findOne({
      where: {
        cart_id: cart.id,
        product_id: req.params.productId
      }
    }), cart]
  })
  .spread((item, cart) => {
    if (item) {
      return item.increment('quantity', {by: 1})
    } else {
      return CartProduct.create({
        cart_id: cart.id,
        product_id: req.params.productId,
        quantity: 1
      })
    }
  })
  .then(item => res.send(item))
  .catch(next)
})

// delete item from cart
cart.delete('/:userId/:productId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(cart => {
    return CartProduct.findOne({
      where: {
        cart_id: cart.id,
        product_id: req.params.productId
      }
    })
  })
  .then(item => {
    const quant = item.quantity
    if (quant <= 1) {
      return item.destroy({ force: true })
    } else if (quant > 1) {
      return item.update({quantity: (quant - 1)})
    }
  })
  .then(item => {
    if (item.quantity) {
      res.send(item)
    } else {
      res.send('Item has been removed from cart')
    }
  })
  .catch(next)
})

// update quantity of items
cart.put('/:userId/:productId', (req, res, next) => {
  Cart.findOne({
    where: {
      user_id: req.params.userId
    }
  })
  .then(cart => {
    return CartProduct.findOne({
      where: {
        cart_id: cart.id,
        product_id: req.params.productId
      }
    })
  })
  .then(item => {
    const newQuant = req.body.quantity
    if (newQuant === 0) {
      return item.destroy({ force: true })
    } else if (newQuant >= 1) {
      return item.update({quantity: newQuant})
    } else {
      res.send('Please enter a number greater than 0')
    }
  })
  .then(item => {
    if (item.quantity) {
      res.send(item)
    } else {
      res.send('Item has been removed from cart')
    }
  })
  .catch(next)
})

module.exports = cart
