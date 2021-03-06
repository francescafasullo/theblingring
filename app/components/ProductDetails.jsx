import React, {Component} from 'react'
import {Carousel, Col} from 'react-bootstrap'

export default (props) => {
  const { photos, title, description, price, id } = props.selectedProduct
  const user = props.loggedInUser
  const handleAddButton = props.handleAddButton

  return (
    <div>
      <Col xs={6} md={4}>
        <div className="image-gallery">
          <Carousel>
            {
              photos ? photos.map(photoUrl => {
                return (<Carousel.Item><img src={photoUrl}/></Carousel.Item>)
              }) : null
            }
          </Carousel>
        </div>
      </Col>
      <Col xs={12} md={8}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>${price}</p>
        <button id={id} type="button" className="btn btn-default btn-md" onClick={handleAddButton}>
          <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to cart!
        </button>
      </Col>
    </div>
  )
}
