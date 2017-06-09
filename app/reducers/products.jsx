import axios from 'axios'

const initialState = {
  allProducts: [],
  selectedProduct: {},
  allCategories: []
}

/* ---- actions ---- */
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

/* ---- actions creators ---- */
const getSingleProduct = (productById) => ({
  type: GET_SINGLE_PRODUCT,
  selectedProduct: productById
})

const getAllCategories = (categories) => ({
  type: GET_ALL_CATEGORIES,
  allCategories: categories
})

/* ---- dispatchers ---- */
export const getOneProduct = (productId) =>
  dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(res => res.data)
    .then(product => dispatch(getSingleProduct(product)))
    .catch(err => console.error(err))
  }

export const getCategories = () =>
  dispatch => {
    axios.get(`/api/products/categories`)
    .then(res => res.data)
    .then(categories => dispatch(getAllCategories(categories)))
    .catch(err => console.error(err))
  }

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_SINGLE_PRODUCT:
    newState.selectedProduct = action.selectedProduct
    break

  case GET_ALL_CATEGORIES:
    newState.allCategories = action.allCategories
    break

  default:
    return state
  }

  return newState
}

export default reducer
