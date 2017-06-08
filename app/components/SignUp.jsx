import React, { Component } from 'react'

export const SignUp = ({ signup }) => {
  return (
      <form onSubmit={evt => {
        evt.preventDefault()
        signup(evt.target.email.value, evt.target.password.value)
      }}>
        <input name="email" />
        <input name="password" type="password" />
        <input type="submit" value="Signup" />
      </form>
  )
}

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => (state),
  {signup},
)(SignUp)
