import React from 'react'
import {connect} from 'react-redux'

import {getOneProduct} from '../reducers/products'
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  loadSingleProduct: productId => dispatch(getOneProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
