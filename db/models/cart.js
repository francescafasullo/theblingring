'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports.associations = (Cart, {User, Product}) => {
  Cart.belongsTo(User)
  Cart.hasMany(Product)
}
