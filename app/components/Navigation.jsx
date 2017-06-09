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
    const loggedOutFeats = (
      <div>
        <Login/>
        <Link to={`/signup`}><button className="btn btn-default" type="button">Sign Up</button></Link>
      </div>
      )
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>{'\u2728'} The Bling Ring</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {user ? <WhoAmI/> : loggedOutFeats}
          {categories.map(category => <LinkContainer to={`/products/categories/${category.id}`} key={category.id}><NavItem>{category.name}</NavItem></LinkContainer>)}
        </Nav>
      </Navbar>
    )
  }
}
