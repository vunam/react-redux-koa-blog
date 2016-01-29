import React from 'react'
import ReactDOM from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../shared/routes.jsx'
import Html from '../shared/base/Html.jsx'

import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'

const bundleFile = "http://localhost:8080/app.js"

export default function *renderApp() {
  const location = createLocation(this.url)
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      this.throw(err.message, 500) 
    } else if (redirectLocation) {
      this.redirect(redirectLocation.pathname + redirectLocation.search);
    }

    const store = configureStore()

    const component = (
      <Provider store={ store }>
        <RoutingContext { ...renderProps } />
      </Provider>)


    this.body = ReactDOM.renderToString(
        <Html component={component} bundle={bundleFile} />
      )
  })
}