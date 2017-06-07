import React, {Component} from 'react'

export default class ProductDetails extends Component {
  componentDidMount() {
    // this.setState({singleProduct: this.props.loadSingleProduct(1)})
    this.props.loadSingleProduct(1)
  }

  render() {
    return (
      <div>
        <img src={this.props.products.product.photos}/>
        <h1>{this.props.products.product.title}</h1>
        <p>{this.props.products.product.description}</p>
        <p>${this.props.products.product.price}</p>
      </div>
    )
  }
}
