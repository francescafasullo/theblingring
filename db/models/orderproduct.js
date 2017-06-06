'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orderproduct', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports.associations = (Orderproduct, {Product, Order}) => {
  Orderproduct.belongsTo(Order)
}
