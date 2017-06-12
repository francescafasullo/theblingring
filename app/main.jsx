'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import SignUp from './components/SignUp'
import ProductDetailsContainer from './containers/ProductDetailsContainer'
import NavigationContainer from './containers/NavigationContainer'
import ProductsByCategoryContainer from './containers/ProductsByCategoryContainer'

import {getOneProduct, getProductsByCategory} from './reducers/products.jsx'

export const onSingleProductEnter = nextRouterState => {
  const productId = nextRouterState.params.productId
  store.dispatch(getOneProduct(productId))
}

export const onSingleCategoryEnter = nextRouterState => {
  const categoryId = nextRouterState.params.categoryId
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
        <IndexRedirect to="/home" />
        <Route path ="/signup" component={SignUp} />
        <Route path="/home" component={Homepage} /> {/* allProducts */}
        <Route path="/products/:productId" component={ProductDetailsContainer} onEnter={onSingleProductEnter}/>
        <Route path="/products/categories/:categoryId" component={ProductsByCategoryContainer} onEnter={onSingleCategoryEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
