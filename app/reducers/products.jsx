import axios from 'axios'

const initialState = {
  allProducts: [],
  selectedProduct: {}
}

/* ---- actions ---- */
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

/* ---- actions creators ---- */
const getSingleProduct = (productById) => ({
  type: GET_SINGLE_PRODUCT,
  selectedProduct: productById
})

/* ---- dispatchers ---- */
export const getOneProduct = (productId) =>
  dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(res => res.data)
    .then(product => dispatch(getSingleProduct(product)))
    .catch(err => console.error(err))
  }

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_SINGLE_PRODUCT:
    newState.selectedProduct = action.selectedProduct
    break

  default:
    return state
  }

  return newState
}

export default reducer
