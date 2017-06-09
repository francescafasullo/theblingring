import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Navigation extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {

            /* for each category in db
              <NavItem Link={/category.name}>{category.name}</NavItem>
             */
          }
          <NavItem>Earrings</NavItem>
          <NavItem>Rings</NavItem>
          <NavItem>Necklaces</NavItem>
          <NavItem>Bracelets</NavItem>
          {
            /* {user ? <WhoAmI/> : <Login/>}
            cart stuff here too?
             */
          }
        </Nav>
      </Navbar>
    )
  }
}
