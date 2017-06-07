import axios from 'axios'

const initialState = {
  allProducts: [],
  product: {} // selectedProduct. self-documenting variables -- KHAM
}

/* ---- actions ---- */
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

/* ---- actions creators ---- */
const getSingleProduct = (productById) => ({
  type: GET_SINGLE_PRODUCT,
  product: productById
})

/* ---- dispatchers ---- */
export const getOneProduct = (productId) =>
  dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(res => res.data)
    .then(res => dispatch(getSingleProduct(res))) // should be product not res -- KHAM
    .catch(err => console.error(err)) // handle these in the UI so the user knows something went wrong. Look into growls if you want. Or just conditional if error show message straight in HTML -- KHAM
  }

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_SINGLE_PRODUCT:
    newState.product = action.product
    break

  default:
    return state
  }

  return newState
}

export default reducer
