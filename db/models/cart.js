'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cart', {
})

module.exports.associations = (Cart, {User, Product}) => {
  Cart.belongsTo(User)
}
