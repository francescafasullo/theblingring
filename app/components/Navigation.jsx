import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>Earrings</NavItem>
          <NavItem>Rings</NavItem>
          <NavItem>Necklaces</NavItem>
          <NavItem>Bracelets</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
