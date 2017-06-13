import axios from 'axios'

const initialState = {
  allProducts: [],
  selectedProduct: {},
  allCategories: [],
  categoryProducts: []
}

/* ---- actions ---- */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const GET_ALL_PRODUCTS_IN_CATEGORY = 'GET_ALL_PRODUCTS_IN_CATEGORY'

/* ---- action creators ---- */
const getAllProducts = (allProducts) => ({
  type: GET_ALL_PRODUCTS, allProducts
})

const getSingleProduct = (selectedProduct) => ({
  type: GET_SINGLE_PRODUCT, selectedProduct
})

const getAllCategories = (allCategories) => ({
  type: GET_ALL_CATEGORIES, allCategories
})

const getAllProductsInCategory = (categoryProducts) => ({
  type: GET_ALL_PRODUCTS_IN_CATEGORY, categoryProducts
})

/* ---- dispatchers ---- */
export const getProducts = () =>
  dispatch => {
    axios.get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getAllProducts(products)))
    .catch(err => console.error(err))
  }

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

export const getProductsByCategory = (categoryId) =>
  dispatch => {
    axios.get(`/api/products/categories/${categoryId}`)
    .then(res => res.data)
    .then(category => dispatch(getAllProductsInCategory(category)))
    .catch(err => console.error(err))
  }

/* ---- reducer ---- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case GET_ALL_PRODUCTS:
    newState.allProducts = action.allProducts
    break

  case GET_SINGLE_PRODUCT:
    newState.selectedProduct = action.selectedProduct
    break

  case GET_ALL_CATEGORIES:
    newState.allCategories = action.allCategories
    break

  case GET_ALL_PRODUCTS_IN_CATEGORY:
    newState.categoryProducts = action.categoryProducts
    break

  default:
    return state
  }

  return newState
}

export default reducer
