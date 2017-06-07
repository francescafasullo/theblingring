'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, BOOLEAN, INTEGER} = require('sequelize')

const Review = require('./review')
const Order = require('./order')

module.exports = db => db.define('users', {
  name: STRING,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
      unique: true
    }
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  },
  billingHouseNum: {
    type: STRING,
  },
  billingZipCode: {
    type: INTEGER,
  },
  billingCity: {
    type: STRING
  },
  billingState: {
    type: STRING
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
  password: VIRTUAL // Note that this is a virtual, and not actually stored in DB
}, {
  indexes: [{fields: ['email'], unique: true}],
  // validate: {
  //   zipValid() {
  //     if (this.billingZipCode.length !== 5) {
  //       throw new Error('Zip code must be valid')
  //     }
  //   }
  // },
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

module.exports.associations = (User, {OAuth}) => {
  User.hasOne(OAuth)
  // User.hasMany(Review)
}

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
}
