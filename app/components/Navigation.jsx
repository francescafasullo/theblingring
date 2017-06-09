import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Navigation extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const categories = this.props.allCategories
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>{'\u2728'} The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {
            categories.map(category => <NavItem key={category.id}>{category.name}</NavItem>)

            /* {user ? <WhoAmI/> : <Login/>}
            cart stuff here too
             */
          }
        </Nav>
      </Navbar>
    )
  }
}
