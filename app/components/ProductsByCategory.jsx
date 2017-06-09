import React from 'react'
import {Grid, Col, Thumbnail} from 'react-bootstrap'

export default(props) => {
  const products = props.allProducts
  console.log('THE PROPS: ', props)
  return (
    <div>
      <Grid>
        {
          products ? products.map(product => {
            return (
            <Col xs={6} md={4} key={product.id}>
              <Thumbnail src={product.photos[0]}>
              <h5>{product.title}</h5>
              </Thumbnail>
            </Col>
            )
          }) : null
        }
      </Grid>
    </div>
  )
}
