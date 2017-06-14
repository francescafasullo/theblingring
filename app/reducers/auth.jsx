import axios from 'axios'
import { browserHistory } from 'react-router'
import { totalCartItems } from './cart'

/* ---- actions ---- */
const AUTHENTICATED = 'AUTHENTICATED'

/* ---- action creators ---- */
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

/* ---- dispatchers ---- */
export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const signup = (name, email, password) =>
  dispatch =>
    axios.post('/api/auth/signup/local', {name, email, password})
    .then(() => dispatch(whoami()))
    .then(() => browserHistory.push('/'))
    .catch(() => dispatch(whoami()))

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
        if (user) {
          dispatch(totalCartItems(user.id))
        }
      })
      .catch(failed => dispatch(authenticated(null)))

/* ---- reducer ---- */
const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

export default reducer
