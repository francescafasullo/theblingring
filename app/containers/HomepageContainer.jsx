import React from 'react'
import {connect} from 'react-redux'

import Homepage from '../components/Homepage'

const mapStateToProps = state => ({
  allProducts: state.products.allProducts
})

export default connect(mapStateToProps)(Homepage)
