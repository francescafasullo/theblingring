import React, {Component} from 'react'

export default (props) => {
  const { photos, title, description, price } = props.selectedProduct

  return (
    <div>
      <img src={photos ? photos[0] : null}/> {/* do we have a default photo?*/}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}
