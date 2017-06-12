import React, {Component} from 'react'

export default (props) => {
  const { photos, title, description, price, id } = props.selectedProduct

  return (
    <div>
      <img src={photos ? photos[0] : null}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <button type="button" className="btn btn-default btn-md" onClick={addToCart}>
        <span id={id} className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to cart!
      </button>
    </div>
  )
}

const addToCart = (evt) => {
  evt.preventDefault()

}
