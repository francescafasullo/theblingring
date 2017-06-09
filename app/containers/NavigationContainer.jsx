import React from 'react'
import {connect} from 'react-redux'

// this function getCategories does not yet exist
import {getCategories} from '../reducers/products'
import Navigation from '../components/Navigation'

const mapStateToProps = state => ({
  allCategories: state.products.allCategories
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
