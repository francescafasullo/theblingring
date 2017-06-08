import React, { Component } from 'react'

export const SignUp = ({ signup }) => {
  return (
      <form onSubmit={evt => {
        evt.preventDefault()
        signup(evt.target.email.value, evt.target.password.value)
      }}>
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" type="text" className="form-control" placeholder="Enter a first name..." />
        </div>
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
