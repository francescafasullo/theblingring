'use strict'
const {STRING, ARRAY, INTEGER, NOW, ENUM} = require('sequelize')

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
  shippingZipCode: {
    type: INTEGER,
    allowNull: false,
  },
  shippingCity: {
    type: STRING,
    allowNull: false
  },
  shippingState: {
    type: STRING,
    allowNull: false
  },
  timestamp: NOW,
  status: {
    type: ENUM,
    values: ['created', 'processing', 'cancelled', 'completed'],
    defaultValue: 'created'
  }
}, {
  validate: {
    itemsInCart() {
      if (!this.itemIds.length) {
        throw new Error('Order must contain at least one item')
      }
    },
    zipValid() {
      if (this.shippingZipCode.length !== 5) {
        throw new Error('Zip code must be valid')
      }
    }
  }
})

module.exports.associations = (Order, {User, Product}) => {
  Order.belongsTo(User, {as: 'userId'})
}
