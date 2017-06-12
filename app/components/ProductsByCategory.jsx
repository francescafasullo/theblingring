import React from 'react'
import {Grid, Col, Thumbnail} from 'react-bootstrap'
import {Link} from 'react-router'

export default(props) => {
  const products = props.allProducts
  return (
    <div>
      <Grid>
        {
          products ? products.map(product => {
            return (
            <Col xs={6} md={4} key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnail src={product.photos[0]}>
                <h5>{product.title}</h5>
                </Thumbnail>
              </Link>
            </Col>
            )
          }) : null
        }
      </Grid>
    </div>
  )
}
