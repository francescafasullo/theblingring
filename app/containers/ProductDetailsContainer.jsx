import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductDetails from '../components/ProductDetails'
import { getOneProduct } from '../reducers/products'
import { addItemToCart } from '../reducers/cart'

const mapStateToProps = state => {
  return {
    selectedProduct: state.products.selectedProduct,
    loggedInUser: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart(selectedUser, selectedProduct) {
      dispatch(addItemToCart(selectedUser, selectedProduct))
    }
  }
}

class ProductDetailsContainer extends Component {
  constructor(props) {
    super(props)
    this.handleAddButton = this.handleAddButton.bind(this)
  }

  handleAddButton(event) {
    event.preventDefault()
    this.props.addItemToCart(this.props.loggedInUser, this.props.selectedProduct)
  }

  render() {
    return (
      <ProductDetails {...this.state} {...this.props} handleAddButton={this.handleAddButton} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)
