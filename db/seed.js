'use strict'

const db = require('APP/db')
    , {User, Product, Thing, Favorite, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
    products: products()
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  beyonce: {
    email: 'queen@beyonce.com',
    name: 'Beyonce Knowles',
    password: '1234',
    isAdmin: false
  },
  michelleO: {
    name: 'Michelle Obama',
    email: 'michelle@obama.gov',
    password: '1234',
    isAdmin: false
  },
  francesca: {
    email: 'francesca@francesca.francesca',
    name: 'Francesca',
    password: 'password',
    isAdmin: true
  },
  betty: {
    email: 'betty@betty.betty',
    name: 'Betty',
    password: 'password',
    isAdmin: true
  },
  rachel: {
    email: 'rachel@rachel.rachel',
    name: 'Rachel',
    password: 'password',
    isAdmin: true
  },
  aria: {
    email: 'aria@theblingring.com',
    name: 'Aria',
    password: '1234',
    isAdmin: false
  }

})

const products = seed(Product, {
  kittenMitten: {
    title: 'Kitten Mitten',
    description: 'Our newest hand bracelet is easy-breezy cool - gracefully accentuating the wrist. Delicate yet sturdy, the Kitten Mitten is built to last.',
    photos: ['https://www.catbirdnyc.com/media/catalog/product/o/n/onanna-01.jpg', 'https://www.catbirdnyc.com/media/catalog/product/y/g/ygkm_on2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/k/i/kittenmittenyg.jpg'],
    price: 56.00,
    quantity: 10
  },

})

const things = seed(Thing, {
  surfing: {name: 'surfing'},
  smiting: {name: 'smiting'},
  puppies: {name: 'puppies'},
})

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, things}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'betty loves surfing': {
      user_id: users.betty.id,    // users.betty is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },
    'rachel is into smiting': {
      user_id: users.rachel.id,
      thing_id: things.smiting.id
    },
    'betty loves puppies': {
      user_id: users.betty.id,
      thing_id: things.puppies.id
    },
    'rachel loves puppies': {
      user_id: users.rachel.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, products, things, favorites})
