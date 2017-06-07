'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orderproduct', { // snake case -- KHAM
  productId: { // not this, use associations -- KHAM
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT, // not as exact as Decimal -- KHAMA
    allowNull: false
  },
  quantity: { // validation on positive
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports.associations = (Orderproduct, {Product, Order}) => {
  Orderproduct.belongsTo(Order)
  // again for product ^^ -- KHAM
}

// products can belong to many order
// order can have many products
// join table -- orderproduct -- KHAM