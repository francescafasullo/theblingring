import React, {Component} from 'react'

export default class ProductDetails extends Component {
  componentDidMount() {
    // this.setState({singleProduct: this.props.loadSingleProduct(1)})
    this.props.loadSingleProduct(1)
  }

  render() {
    // const { photos, title, description, price } = this.props.products.product; -- KHAM
    return (
      <div>
        <img src={this.props.products.product.photos}/> {/* photos is in array _shrug_. Checkout out carousels -- maybe just react bootstrap template */}
        <h1>{this.props.products.product.title}</h1>
        <p>{this.props.products.product.description}</p>
        <p>${this.props.products.product.price}</p>
      </div>
    )
  }
}
