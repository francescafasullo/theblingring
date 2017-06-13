import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  const products = props.allProducts
  return (
    <div className="photoTiles">
      {
        products ? products.map(product =>
            <Link className="tileLinks" to={`/products/${product.id}`} key={product.id}>
              <img src={product.photos[product.photos.length-1]} />
            </Link>
        ) : null
      }
    </div>
  )
}
