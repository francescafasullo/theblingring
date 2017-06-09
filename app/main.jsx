'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import NotFound from './components/NotFound'
import SignUp from './components/SignUp'
import ProductDetailsContainer from './containers/ProductDetailsContainer'
import NavigationContainer from './containers/NavigationContainer'
import ProductsByCategoryContainer from './containers/ProductsByCategoryContainer'

import {getOneProduct} from './reducers/products.jsx'
import {getProductsByCategory} from './reducers/products.jsx'

export const onSingleProductEnter = nextRouterState => {
  const productId = nextRouterState.params.productId
  store.dispatch(getOneProduct(productId))
}

export const onSingleCategoryEnter = nextRouterState => {
  const categoryName = nextRouterState.params.categoryId
  store.dispatch(getProductsByCategory(categoryId))
}

const RootApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) => {
    return (
    <div>
      <nav>
        <NavigationContainer user={user}/>
      </nav>
      {children}
    </div>)
})

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={RootApp}>
        <IndexRedirect to="/jokes" />
        <Route path ="/signup" component={SignUp} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/products/:productId" component={ProductDetailsContainer} onEnter={onSingleProductEnter}/>
        <Route path="/products/category/:categoryId" component={ProductsByCategoryContainer} onEnter={onSingleCategoryEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
