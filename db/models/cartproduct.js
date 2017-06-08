'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cart_product', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
})

module.exports.associations = (CartProduct, {Product, Cart}) => {
  CartProduct.belongsTo(Cart)
  CartProduct.belongsTo(Product)
}
