import React from 'react'
import {connect} from 'react-redux'

import ProductsByCategory from '../components/ProductsByCategory'

const mapStateToProps = state => ({
  // maybe use filtered products
  allProducts: state.products.allProducts
})

export default connect(mapStateToProps)(ProductsByCategory)
