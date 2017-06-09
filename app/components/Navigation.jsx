import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Navigation extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    console.log('THE PROPS: ', this.props)
    const categories = this.props.allCategories
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {
            categories.map(category => <NavItem>{category.name}</NavItem>)

            /* {user ? <WhoAmI/> : <Login/>}
            cart stuff here too?
             */
          }
        </Nav>
      </Navbar>
    )
  }
}
