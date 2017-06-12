import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'

export default (props) => {
  const { photos, title, description, price, id } = props.selectedProduct
  const user = props.loggedInUser
  const handleAddButton = props.handleAddButton

  return (
    <div>
      <div className="image-gallery">
        <Carousel>
          {
            photos ? photos.map(photoUrl => {
              return (<Carousel.Item><img src={photoUrl}/></Carousel.Item>)
            }) : null
          }
        </Carousel>
      </div>

      {/* <img src={photos ? photos[0] : null}/> */}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <button id={id} type="button" className="btn btn-default btn-md" onClick={handleAddButton}>
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to cart!
      </button>
    </div>
  )
}
