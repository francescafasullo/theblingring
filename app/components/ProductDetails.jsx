import React, {Component} from 'react'

export default (props) => {
  const { photos, title, description, price } = props.selectedProduct

  return (
    <div>
      <img src={photos ? photos[0] : null}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}
