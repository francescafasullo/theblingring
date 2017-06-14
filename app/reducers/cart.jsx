import axios from 'axios'

const initialState = {
  selectedProduct: {},
  selectedUser: {}
}

/* ---- actions ---- */
const ADD_TO_CART = 'ADD_TO_CART'

/* ---- action creators ---- */
export const addToCart = (selectedUser, selectedProduct) => ({
  type: ADD_TO_CART,
  selectedUser,
  selectedProduct
})

/* ---- dispatchers ---- */
export const addItemToCart = (user, product) => dispatch => {
  dispatch(addToCart(user.id, product.id))
  axios.post(`/api/cart/${user.id}/${product.id}`)
    .catch(err => console.error(`Adding product: ${product.id} to cart unsuccessful`, err))
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

  default:
    return state
  }
  return newState
}

export default reducer
