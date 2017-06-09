import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import {Link} from 'react-router'
import WhoAmI from './WhoAmI'
import Login from './Login'
import SignUp from './SignUp'

export default class Navigation extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const categories = this.props.allCategories
    const user = this.props.user
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>{'\u2728'} The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {user ? <WhoAmI/> : <Login/>}
          {categories.map(category => <NavItem key={category.id}><Link to={`/products/categories/${category.id}`}>{category.name}</Link></NavItem>)}
        </Nav>
      </Navbar>
    )
  }
}
