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
        <input type="submit" value="Login" />
      </form>
      or <Link to={'/signup'}>Sign Up</Link> (<Link to={'/api/auth/login/google'}>Sign in with Google</Link>)
    </Nav>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
