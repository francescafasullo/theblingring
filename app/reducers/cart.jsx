import axios from 'axios'

const initialState = {
  selectedProduct: {},
  selectedUser: {},
  totalItems: 0
}

/* ---- actions ---- */
const ADD_TO_CART = 'ADD_TO_CART'
const SUM_CART_ITEMS = 'SUM_CART_ITEMS'

/* ---- action creators ---- */
export const addToCart = (selectedUser, selectedProduct) => ({
  type: ADD_TO_CART,
  selectedUser,
  selectedProduct
})

export const sumCartItems = (totalItems) => {
  console.log('totalitemssssss', totalItems)
  return {
    type: SUM_CART_ITEMS,
    totalItems
  }
}

/* ---- dispatchers ---- */
export const addItemToCart = (user, product) => dispatch => {
  dispatch(addToCart(user.id, product.id))
  axios.post(`/api/cart/${user.id}/${product.id}`)
    .catch(err => console.error(`Adding product: ${product.id} to cart unsuccessful`, err))
}

export const totalCartItems = (userId) => dispatch => {
  let totalQuant = 0
  return axios.get(`/api/cart/${userId}`)
    .then(cart => {
      console.log('cart.data', cart.data)
      for (var i = 0; i < cart.data.cart_products.length; i++) {
        totalQuant += cart.data.cart_products[i].quantity
      }
      dispatch(sumCartItems(totalQuant))
    })
    .catch(err => console.error(`Totaling cart items unsuccessful :(`, err))
}

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  console.log('actisdhfdjshfon', action)

  switch (action.type) {
  case ADD_TO_CART:
    newState.selectedProduct = action.selectedProduct
    newState.selectedUser = action.selectedUser
    break

  case SUM_CART_ITEMS:
    newState.totalItems = action.totalItems
    break

  default:
    return state
  }
  return newState
}

export default reducer
