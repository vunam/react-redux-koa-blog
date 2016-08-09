import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom/server'
import Helmet from 'react-helmet'
import { RouterContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import config from '../shared/config'
import Html from '../shared/base/Html.jsx'

import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'
import * as actions from '../shared/actions/posts'

export default function *renderView() {
  const type = this.url.startsWith(config.backend.baseUrl) ? 'backend' : 'app'
  const { routes } = config[type]
  const location = createLocation(this.url)
  const store = configureStore()

  match({ routes, location }, (err, redirection, renderProps) => {
    if (err) {
      this.throw(err.message, 500)
    } else if (redirection) {
      this.redirect(redirection.pathname + redirection.search)
    }

    const component = (
      <Provider store={ store }>
        <RouterContext { ...renderProps } />
      </Provider>)

    this.body = ReactDOM.renderToString(<Html component={component} location={location} type={type} store={store} />)
  })
}
