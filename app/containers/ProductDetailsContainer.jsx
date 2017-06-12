import React from 'react'
import {connect} from 'react-redux'

import {getOneProduct} from '../reducers/products'
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => {
  return {
    selectedProduct: state.products.selectedProduct,
    loggedInUser: state.auth
  }
}

const addToCart = (evt) => {
  evt.preventDefault()
  console.log('what is in this event target', evt.target.value)
  console.log('do i have the props', props)
}

const mapDispatchToProps = state => {
  return {
    addToCart: addToCart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
