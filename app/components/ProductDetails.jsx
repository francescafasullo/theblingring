import React, {Component} from 'react'

export default class ProductDetails extends Component {
  componentDidMount() {
    this.props.loadSingleProduct(1)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div>{this.props.products.product.title}</div>
      </div>
    )
  }
}
