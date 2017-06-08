'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [140]
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  }
})

module.exports.associations = (Review, {Product, User}) => {
  Review.belongsTo(User)
  Review.belongsTo(Product)
}
