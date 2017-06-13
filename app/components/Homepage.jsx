import React from 'react'
import {getProducts} from '../reducers/products'

export default (props) => {
  const products = props.allProducts
  return (
    <div className="photoTiles">
      {
        products ? products.map(product =>
          <img src={product.photos[product.photos.length-1]} />
        ) : null
      }
    </div>
  )
}
