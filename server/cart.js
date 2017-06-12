'use strict'

const db = require('APP/db')
const Product = db.model('product')
const User = db.model('user')
const Cart = db.model('cart')

module.exports = require('express').Router()
  .get('/:userId', (req, res, next) =>
       Cart.findOne({where: {
         user_id: req.params.userId
       }})
       .then(cart => res.json(cart))
       .catch(next))
