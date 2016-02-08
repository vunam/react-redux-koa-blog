import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../shared/routes.jsx'
import Html from '../shared/base/Html.jsx'

import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'
import * as actions from '../shared/actions/posts'

const bundleFile = "http://localhost:8080/app.js"

export default function *renderView() {
  const location = createLocation(this.url)
  const store = configureStore()

  yield store.dispatch(actions.getPosts())

  match({ routes, location }, (err, redirection, renderProps) => {
    if (err) { 
      this.throw(err.message, 500) 
    } else if (redirection) { 
      this.redirect(redirection.pathname + redirection.search) 
    }

    const component = (
      <Provider store={ store }>
        <RoutingContext { ...renderProps } />
      </Provider>)

    this.body = ReactDOM.renderToString(<Html component={component} bundle={bundleFile} store={store} />)
  })
}