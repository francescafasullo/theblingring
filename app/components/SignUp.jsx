import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'

export const SignUp = ({ signup }) => {
  return (
      <form onSubmit={evt => {
        evt.preventDefault()
        signup(evt.target.name.value, evt.target.email.value, evt.target.password.value)
      }}>
        <FormGroup>
          <FormControl name="name" type="text" placeholder="Enter a name..." />
          <FormControl name="email" type="email" placeholder="Enter an email..." />
          <FormControl name="password" type="password" placeholder="Enter a password..." />
          <FormControl type="submit" value="Signup" />
        </FormGroup>
      </form>
  )
}

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => (state),
  {signup},
)(SignUp)
