import React from 'react'
import {ListGroup, ListGroupItem, FormGroup, FormControl} from 'react-bootstrap'

export default class Cart extends React.Component {
  // if user is logged in, get cart items from db
  // else check cookie for any stored cart information

  render() {
    return (
      <div>
        <ListGroup>
        { // for each item in cart (map through items)
          // either from db or cookie
          <ListGroupItem>
            {/*
              cart item photo[0]
              cart item name
              cart item price
            */}
            <FormGroup>
              <FormControl type="text" value={/*QUANTITY_GOES_HERE*/} />
            </FormGroup>
            <Button type="submit" bsStyle="info">Update</Button>
            <Button bsStyle="danger">Delete</Button>
          </ListGroupItem>
        }
        </ListGroup>
      </div>
    )
  }
}
