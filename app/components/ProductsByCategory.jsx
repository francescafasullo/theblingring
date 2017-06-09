import React from 'react'
import {Grid, Col, Thumbnail} from 'react-bootstrap'

export default(props) => {
  return (
    <div>
      <Grid>
        {
          /*
          map through all products of given category
          <Col xs={6} md={4} key={product.id}>
            <Thumbnail src={product.photos[0]}>
            <h5>{product.title}</h5>
          </Col>
          */
        }
      </Grid>
    </div>
  )
}
