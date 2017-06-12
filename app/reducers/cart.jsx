import axios from 'axios'

/* ---- actions ---- */
const ADD_TO_CART = 'ADD_TO_CART'

/* ---- action creators ---- */
const addToCart = (addedProduct) => ({
  type: ADD_TO_CART,
  selectedProduct: addedProduct
})

/* ---- dispatchers ---- */
export const cartItem = (uerId, productId) =>
  dispatch =>
    axios.post(`/api/cart/${userId}/${productId}`, {name, email, password})
    .then((user) => {
      return dispatch(login(user.data.email, user.data.password))
    })
    .catch(() => dispatch(whoami()))

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_TO_CART:
    newState.selectedProduct = action.selectedProduct
    break

  default:
    return state
  }

  return newState
}

export default reducer
