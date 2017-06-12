'use strict'

console.log('seed file hit')

const db = require('APP/db')
    , {User, Product, Review, Order, OrderProduct, Address, Category, Cart, CartProduct, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    categories: categories()
  }

  seeded.products = products(seeded)
  seeded.reviews = reviews(seeded)
  seeded.orders = orders(seeded)
  seeded.addresses = addresses(seeded)
  seeded.orderProducts = orderProducts(seeded)
  seeded.carts = carts(seeded)
  seeded.cartProducts = cartProducts(seeded)

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

const addresses = seed(Address,
({users, orders}) => ({
  'elLago': {
    street: '1111 Woodland Dr.',
    city: 'El Lago',
    state: 'TX',
    zip: 77586,
    user_id: users.francesca.id,
    order_id: orders.lordOfTheRings.id
  },
  'harlem': {
    street: '207 E 120th St., PH',
    city: 'New York',
    state: 'NY',
    zip: 10035,
    user_id: users.beyonce.id,
  },
  'kal': {
    street: '420 Riverside Dr., 5E',
    city: 'New York',
    state: 'NY',
    zip: 10025,
    user_id: users.rachel.id,
    order_id: orders.order2.id
  },
  'kalNew': {
    street: '15 Essex St., 1R',
    city: 'New York',
    state: 'NY',
    zip: 10016,
    user_id: users.aria.id
  },
  'fake': {
    street: '1234 Fake St.',
    city: 'Nowhere',
    state: 'CA',
    zip: 90210,
    user_id: users.betty.id
  }
})
)

const products = seed(Product,
  ({ categories }) => ({
    'kittenMitten': {
      title: 'Kitten Mitten',
      description: 'Our newest hand bracelet is easy-breezy cool - gracefully accentuating the wrist. Delicate yet sturdy, the Kitten Mitten is built to last.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/o/n/onanna-01.jpg', 'https://www.catbirdnyc.com/media/catalog/product/y/g/ygkm_on2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/k/i/kittenmittenyg.jpg'],
      price: 25.00,
      quantity: 10,
      category_id: categories.bracelets.id
    },
    'ballerinaBracelet': {
      title: 'Ballerina Bracelet, Yellow Gold',
      description: 'Long, lean, and graceful. Looks strong and delicate on it\'s own, or in a pile. For an ultra fitted look, a gentle pinch on either side of the barre will help shape it to your wrist. Solid 14k yellow gold, 2 1/4" at its widest point and adjustable. One size fits most, 6.5" total length. Handmade in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/y/g/ygballerina.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/b/r/bracelet_yg2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/b/r/bracelet_yg.jpg'],
      price: 68.00,
      quantity: 10,
      category_id: categories.bracelets.id
    },
    'tinyCorsageBracelet': {
      title: 'Tiny Corsage Bracelet, Rose Gold',
      description: 'We told you we like things tiny! This blushingly beautiful, delicate bracelet is solid 14k rose gold with a sparkling, white 2mm diamond set in white gold. Made to be worn snug. Total length, 6.5". One size fits most, handmade in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/i/tinycorsagerg.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/i/tinycorsagerg3.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/i/tiny_corsage_5.jpg'],
      price: 32.00,
      quantity: 30,
      category_id: categories.bracelets.id
    },
    'snowQueenRing': {
      title: 'Snow Queen Ring',
      description: 'The Snow Queen will melt your heart into a shining puddle of diamond-y sparkle. We\'ve been dreaming of this ring for years. A Snow Queen\'s thimble\'s worth of rose cut and brilliant cut diamonds, sit in a glorious, luminescent curve. Made to hug the lines of a multitude of solitaires and other style engagement rings.',
      photos: ['https://s-media-cache-ak0.pinimg.com/originals/01/a5/bc/01a5bc44325679a8fcd91d7e09108dda.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/ee/f4/19/eef419e0625faf40f8b2b73d4bbaa45b.jpg'],
      price: 150.00,
      quantity: 3,
      category_id: categories.rings.id
    },
    'wanderingStarRing': {
      title: 'Wandering Star Ring, Opal',
      description: 'A ring of epic beauty, plucked straight from the night sky. 14k yellow gold, 5mm Australian opal, 10 brilliant diamonds on a 1.2mm solid gold band, total carat wieght is approx. 0.6 ct, handmade in Montreal.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/w/a/wanderingstar4.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/de/40/33/de403318258ec677bb6a8c38b31b1608.jpg'],
      price: 120.00,
      quantity: 25,
      category_id: categories.rings.id
    },
    'earNutEarrings': {
      title: 'Ear Nut Earring, Gold',
      description: 'These smart and simple studs take inspiration from the back of a nose ring, eliminating the need for a backing. Perfect for every day wear, also works perfectly for the often forgotten second and third holes.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/n/u/nut7.jpg'],
      price: 20.00,
      quantity: 50,
      category_id: categories.earrings.id
    },
    'twoStepChainEarrings': {
      title: 'Two Step Chain Earrings, Opal',
      description: 'Smallest moody opals to frame your face, and swing ever-so-gently from your lobes. Solid 14k yellow gold, 2mm Australian opals, total length of earring: 1/2 inch, made in Brooklyn, sold as a pair.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwake_opaltwostep2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwake_opaltwostep6.jpg'],
      price: 50.00,
      quantity: 34,
      category_id: categories.earrings.id
    },
    'tinyDancerStudEarrings': {
      title: 'Tiny Dancer Studs, Yellow Gold',
      description: 'These little sparklers make us extremely happy. Sold as a pair, a star and crescent moon for a little night-time magic. Moon is 8mm, star is 7mm - solid 14k yellow gold. Handmade in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/i/tinydancer_gold_3_1.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/i/tinydanceryg2.jpg'],
      price: 25.00,
      quantity: 75,
      category_id: categories.earrings.id
    },
    'genieLampNecklace': {
      title: 'Genie Lamp Necklace',
      description: 'I dream of the tiniest genie! Cast from a hand-carved genie lamp. Did we say tiniest? Cause we mean it. Tiniest. Bronze genie lamp 10mm x 7mm. 19" brass chain. Made in New York by Tiny & Mahsa.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/e/genie.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/e/genie2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/e/genie3.jpg'],
      price: 32.00,
      quantity: 45,
      category_id: categories.necklaces.id
    },
    'crescentMoonNecklace': {
      title: 'Crescent Moon Necklace',
      description: 'Shining and beautiful, a dream of a necklace. Solid 14k yellow gold on a 17" chain. 14mm x 10mm moon with .08 total carat weight diamonds. Made in New York.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/c/r/crescentnecklace-5.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/c/r/crescentnecklace-4.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/c/r/crescentnecklace-2.jpg'],
      price: 645.00,
      quantity: 5,
      category_id: categories.necklaces.id
    },
    'opalCountingNecklace': {
      title: 'Opal Counting Necklace',
      description: 'How to look like the stars. For an other-worldly bride and/or every day with a busted tee and jeans. There\'s really no wrong way to wear the stars. Solid 14k yellow gold 16" chain with a mix of 4mm and 2mm Australian opals, diamons, emeralds, and tanzanite. 0.03 ct white diamonds. Handmade in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/c/o/countingnecklace6.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwakenecklace3.jpg'],
      price: 86.00,
      quantity: 30,
      category_id: categories.necklaces.id
    },
    'grecoLariatNecklace': {
      title: 'Greco Lariat Necklace',
      description: 'The Greco Lariat makes fine work of your curves. A smart reimagining of the lariat, made from the sparkliest gold chain around. Wraps seductively around your neck to find the perfect resting point, but is securely held in back with the addition of a discreet clasp. Layers beautifully, an extra little glint of gold to peek out from below your favorite dress or autumn sweater. Solid 14k gold, 19.25" overall length. Handmade with love in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/r/greco8.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/r/greco4.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/g/r/grecolariat.jpg'],
      price: 126.00,
      quantity: 35,
      category_id: categories.necklaces.id
    },
    'opalTeardropNecklace': {
      title: 'Opal Teardrop Necklace',
      description: 'A shimmering opal on a delicate chain. Opal, also known as The Queen of the Gems, is the birthstone of October. And here\'s a fun fact: In medieval times, opals were thought to make the wearer invisible and were called "Patron of Thieves." Made of solid 14k gold with natrual Australian opal on a 16" chain. Handmade in Brooklyn.',
      photos: ['https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/e/teardrop_2.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/fireopal3.jpg', 'https://www.catbirdnyc.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/t/e/teardrop3.jpg'],
      price: 65.00,
      quantity: 20,
      category_id: categories.necklaces.id
    }
  })
)

const categories = seed(Category, {
  earrings: {
    name: 'Earrings'
  },
  rings: {
    name: 'Rings'
  },
  bracelets: {
    name: 'Bracelets'
  },
  necklaces: {
    name: 'Necklaces'
  }
})

const reviews = seed(Review,
  ({users, products}) => ({
    'kittenMittenReview': {
      text: 'Omgggg love it so much im soooo trendy now all my friends are sooooooo jealous. Wearing this to Coachella!!!! Shipping was fast and the quality is good. Can\'t wait to show it off!',
      date: new Date(),
      rating: 5,
      product_id: products.kittenMitten.id,
      user_id: users.rachel.id
    },
    'twoStepChainEarringsReview': {
      text: 'Love them. Just got them today, perfect for my daughters 18th birthday. Nice size, comfortable fit, and came in a beautiful box with a beautiful certificate.',
      date: new Date(),
      rating: 5,
      product_id: products.twoStepChainEarrings.id,
      user_id: users.betty.id
    },
    'twoStepChainEarringsReview2': {
      text: 'Disappointed and Ashamed. The screw on earrings is difficult the diamonds seem small for .5 carrots compared to other diamonds I have. Never ordering from here again!',
      date: new Date(),
      rating: 1,
      product_id: products.twoStepChainEarrings.id,
      user_id: users.aria.id
    }
  })
)

const orders = seed(Order,
    ({users}) => ({
      'lordOfTheRings': {
        email: users.francesca.email,
        user_id: users.francesca.id
      },
      'order2': {
        email: users.rachel.email,
        user_id: users.rachel.id
      }
    })
)

const carts = seed(Cart,
   ({ users }) => ({
     'cart1': {
       user_id: users.betty.id
     },
     'cart2': {
       user_id: users.aria.id
     },
     'cart3': {
       user_id: users.rachel.id
     }
   })
)

const cartProducts = seed(CartProduct,
    ({ carts, products }) => ({
      'ringInCart1': {
        quantity: 1,
        product_id: products.snowQueenRing.id,
        cart_id: carts.cart1.id
      },
      'earringInCart1': {
        quantity: 2,
        product_id: products.twoStepChainEarrings.id,
        cart_id: carts.cart1.id
      },
      'stuffInCart2': {
        quantity: 1,
        product_id: products.kittenMitten.id,
        cart_id: carts.cart2.id
      },
      'stuffInCart3': {
        quantity: 1,
        product_id: products.earNutEarrings.id,
        cart_id: carts.cart3.id
      }
    })
)

const orderProducts = seed(OrderProduct,
    ({users, products, orders}) => ({
      'lordOfTheRings1': {
        product_id: products.wanderingStarRing.id,
        price: products.wanderingStarRing.price,
        quantity: 1,
        user_id: users.francesca.id,
        order_id: orders.lordOfTheRings.id
      },
      'lordOfTheRings2': {
        product_id: products.snowQueenRing.id,
        price: products.snowQueenRing.price,
        quantity: 1,
        user_id: users.francesca.id,
        order_id: orders.lordOfTheRings.id
      },
      'order2item': {
        product_id: products.twoStepChainEarrings.id,
        price: products.twoStepChainEarrings.price,
        quantity: 1,
        user_id: users.rachel.id,
        order_id: orders.order2.id
      }
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

module.exports = Object.assign(seed, {users, products, reviews, orders, orderProducts})
