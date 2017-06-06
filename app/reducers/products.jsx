import axios from 'axios'

const initialState = {
  allProducts: [],
  product: {}
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
    .then(res => dispatch(getSingleProduct(res)))
    .catch(err => console.error(err))
  }

/* ---- reducer ---- */
const reducer = (state = {}, action) => {
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
