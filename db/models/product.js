'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('products', {
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
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// module.exports.associations = (Product, {Review, Category}) => {
//   Product.hasMany(Review)
//   Product.belongsToMany(Category)
// }
