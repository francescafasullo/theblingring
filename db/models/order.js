'use strict'
const {STRING, ARRAY, INTEGER, NOW, ENUM} = require('sequelize')

// make a cart model -- KH

module.exports = db => db.define('orders', {
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  shippingHouseNum: {
    type: STRING,
    allowNull: false
  },
  shippingZipCode: { // length -- KH
    type: INTEGER,
    allowNull: false,
  },
  shippingCity: {
    type: STRING,
    allowNull: false
  },
  shippingState: { // enum; length -- KH
    type: STRING,
    allowNull: false
  },
  billingHouseNum: {
    type: STRING,
    allowNull: false
  },
  billingZipCode: {
    type: INTEGER,
    allowNull: false,
  },
  billingCity: {
    type: STRING,
    allowNull: false
  },
  billingState: {
    type: STRING,
    allowNull: false
  },
  // timestamp: NOW, // maybe date type with default value of now
  status: {
    type: ENUM,
    values: ['created', 'processing', 'cancelled', 'completed'],
    defaultValue: 'created'
  }
})
// commented out code in master :( -- KHAM
// {
//   validate: {
//     itemsInCart() {
//       if (!this.itemIds.length) {
//         throw new Error('Order must contain at least one item')
//       }
//     },
//     zipValid() {
//       if (this.shippingZipCode.length !== 5) { // validation on type
//         throw new Error('Zip code must be valid')
//       }
//     }
//   }
// }

module.exports.associations = (Order, {User, Product}) => {
  Order.belongsTo(User) // sequelize benefits -- ability to include (eager loading) -- plus methods order.setUser -- KHAM
  // Order.belongsToMany(Products ----- ) -- KHAM
}
