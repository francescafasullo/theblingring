import React from 'react'
import {connect} from 'react-redux'

// this function getCategories does not yet exist
import {getCategories} from '../reducers/products'
import {totalCartItems} from '../reducers/cart'
import Navigation from '../components/Navigation'

const mapStateToProps = state => ({
  allCategories: state.products.allCategories,
  totalItems: state.totalItems,
  loggedInUser: state.auth
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  totalCartItems: (userId) => dispatch(totalCartItems(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
