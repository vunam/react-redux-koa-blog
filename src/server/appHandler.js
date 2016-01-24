import React from 'react'
import ReactDOM from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../shared/routes.jsx'
import Html from '../shared/base/Html.jsx'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const bundleFile = "http://localhost:8080/app.js"

import * as reducers from '../shared/reducers'

const store = createStore(combineReducers(reducers))

export default function *renderApp() {
  const location = createLocation(this.url)
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      this.throw(err.message, 500) 
    } else if (redirectLocation) {
      this.redirect(redirectLocation.pathname + redirectLocation.search);
    }

    const component = <RoutingContext { ...renderProps } />

    this.body = ReactDOM.renderToString(
      <Provider store={ store }>
        <Html component={component} bundle={bundleFile} />
      </Provider>
      )
  })
}