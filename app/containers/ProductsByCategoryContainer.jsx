import React from 'react'
import {connect} from 'react-redux'

import ProductsByCategory from '../components/ProductsByCategory'

const mapStateToProps = state => ({
  categoryProducts: state.products.categoryProducts
})

export default connect(mapStateToProps)(ProductsByCategory)
