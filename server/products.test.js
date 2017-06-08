const request = require('supertest'),
  {expect} = require('chai'),
  db = require('APP/db'),
  app = require('./start')

// describe undefined? will need to debug
// describe('/api/products', () => {
//   before('Await database sync', () => db.didSync)
//   afterEach('Clear the tables', () => db.truncate({cascade: true }))

// })
