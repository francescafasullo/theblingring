'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cart', {
})

module.exports.associations = (Cart, {User, Product, CartProduct}) => {
  Cart.belongsTo(User)
  Cart.hasMany(CartProduct)
}
