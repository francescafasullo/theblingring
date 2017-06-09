import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then((user) => {
        return dispatch(loadCart(user.data.id))
      })
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const signup = (name, email, password) =>
  dispatch =>
    axios.post('/api/auth/signup/local', {name, email, password})
    .then((user) => {
      return dispatch(login(user.data.email, user.data.password))
    })
    .catch(() => dispatch(whoami()))

export const loadCart = (userId) => {
  return dispatch =>
    axios.post('/api/auth/findCart/local', {userId})
    .catch(() => dispatch(whoami()))
}

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
