'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('order_product', {
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
})

module.exports.associations = (Orderproduct, {Product, Order}) => {
  Orderproduct.belongsTo(Order)
  Orderproduct.belongsTo(Product)
}
