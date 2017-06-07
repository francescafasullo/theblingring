import React, {Component} from 'react'

export default class ProductDetails extends Component {
  componentDidMount() {
    // !!! loading single product hard-coded! UPDATE
    this.props.loadSingleProduct(1)
  }

  render() {
    const { photos, title, description, price } = this.props.products.selectedProduct
    return (
      <div>
        <img src={photos}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    )
  }
}
