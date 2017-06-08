'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports.associations = (Category, {Product}) => {
  Category.hasMany(Product)
}
