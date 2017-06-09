'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, BOOLEAN, INTEGER} = require('sequelize')

const Review = require('./review')
const Order = require('./order')
const Address = require('./address')
const Cart = require('./cart')

module.exports = db => db.define('user', {
  name: STRING,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  },

  // We support oauth, so user may or may not have passwords.
  password_digest: STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
  password: VIRTUAL // Note that this is a virtual, and not actually stored in DB
}, {
  indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  defaultScope: {
    attributes: {exclude: ['password_digest']}
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate(plaintext) {
      return bcrypt.compare(plaintext, this.password_digest)
    }
  }
})

module.exports.associations = (User, {OAuth, Review, Order, Address, Cart}) => {
  User.hasOne(OAuth)
  User.hasMany(Review)
  User.hasMany(Order)
  User.hasMany(Address)
  User.hasOne(Cart)
}

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
}
