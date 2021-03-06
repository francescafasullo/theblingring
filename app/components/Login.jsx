import React from 'react'
import {Link} from 'react-router'
import {Button, Nav, Navbar} from 'react-bootstrap'

export const Login = ({ login }) => (
    <Nav pullRight>
      <form onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      } }>
        <input name="username" />
        <input name="password" type="password" />
        <input type="submit" className="btn btn-default btn-md" value="Login" />
      </form>
      or <Link to={'/signup'}>Sign Up</Link>
    </Nav>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
