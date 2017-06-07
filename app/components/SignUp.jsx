import React, { Component } from 'react'

export default class SignUp extends Component {
  // componentDidMount() {
  //   this.nextJoke()
  // }

  // nextJoke = () =>
  //   this.setState({
  //     joke: randomJoke(),
  //     answered: false,
  //   })

  // answer = () =>
  //   this.setState({answered: true})

  render() {
    // if (!this.state) { return null }

    // const {joke, answered} = this.state
    return (
      <form onSubmit={evt => {

      }}>
        <input name="email" />
        <input name="password" type="password" />
        <input type="submit" value="Signup" />
      </form>
    )
  }
}

// import {login} from 'APP/app/reducers/auth'
// import {connect} from 'react-redux'

// export default connect(
//   state => ({}),
//   {signup},
// )(SignUp)
