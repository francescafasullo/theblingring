'use strict'
const {STRING, ARRAY, INTEGER, NOW, ENUM} = require('sequelize')

module.exports = db => db.define('order', {
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  status: {
    type: ENUM,
    values: ['created', 'processing', 'cancelled', 'completed'],
    defaultValue: 'created'
  }
})

module.exports.associations = (Order, {User, Product}) => {
  Order.belongsTo(User)
  Order.belongsToMany(Product, {through: 'Orderproduct'})
}
