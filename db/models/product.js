'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('products', { // singular -- KHAM
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
//   Product.hasMany(Review) // we should check this error out, make a help ticket -- KHAM
//   Product.belongsToMany(Category) // Make category model -- KHAM
// }
