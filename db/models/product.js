'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  photos: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: ['http://via.placeholder.com/200x200']
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports.associations = (Product, {Review, Category, Order, OrderProduct}) => {
  Product.hasMany(Review)
  Product.belongsTo(Category)
  Product.belongsToMany(Order, {through: OrderProduct})
}
