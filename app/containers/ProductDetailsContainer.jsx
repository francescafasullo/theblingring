import React from 'react'
import {connect} from 'react-redux'

import {getOneProduct} from '../reducers/products' //take me out :)
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => {
  return {
    selectedProduct: state.products.selectedProduct
  }
}

export default connect(mapStateToProps)(ProductDetails)
