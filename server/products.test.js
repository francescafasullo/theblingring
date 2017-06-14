const request = require('supertest'),
  {expect} = require('chai'),
  db = require('APP/db'),
  app = require('./start')

/* global describe it before afterEach */

describe('/api/products', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
})

describe('GET /products', () =>
  it('returns json', () =>
    request(app)
      .get(`/api/products`)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
  ))
