import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
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
          <Link to="/">
            <Navbar.Brand>{'\u2728'} The Bling Ring</Navbar.Brand>
          </Link>
        </Navbar.Header>
        <Nav>
          {categories.map(category => <LinkContainer to={`/products/categories/${category.id}`} key={category.id}><NavItem>{category.name}</NavItem></LinkContainer>)}
        </Nav>
        <Nav pullRight>
          <button type="button" className="btn btn-default btn-md"><a href="/cart">
            <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
          </a></button>
        </Nav>
        <Nav pullRight>
          {user ? <WhoAmI/> : <Login/>}
        </Nav>
      </Navbar>
    )
  }
}
