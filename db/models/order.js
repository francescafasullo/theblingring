'use strict'
const {STRING, ENUM} = require('sequelize')

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

module.exports.associations = (Order, {User, Product, Address, OrderProduct}) => {
  Order.belongsTo(User)
  Order.belongsToMany(Product, {through: OrderProduct})
  Order.hasMany(Address)
}
