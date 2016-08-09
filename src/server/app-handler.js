import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom/server'
// import Helmet from 'react-helmet'
import { RouterContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import config from '../shared/config'
import Html from '../shared/base/Html.jsx'

import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'

export function fetchingComponentData(store, renderProps, location) {
  const fetchingComponents = renderProps.components
    .filter(component => typeof component !== 'undefined')
    .map(component => component.WrappedComponent ? component.WrappedComponent : component)
    .filter(component => component.fetchData)
  const fetchPromises = fetchingComponents.map(component => component.fetchData(store, renderProps, location))

  return Promise.all(fetchPromises)
}

export default function *renderView() {
  const type = this.url.startsWith(config.backend.baseUrl) ? 'backend' : 'app'
  const { routes } = config[type]
  const location = createLocation(this.url)
  const store = configureStore()
  let fetchData
  let view

  match({ routes, location }, (err, redirection, renderProps) => {
    if (err) this.throw(err.message, 500)
    else if (redirection) this.redirect(redirection.pathname + redirection.search)

    const renderApp = () => {
      const component = (
        <Provider store={ store }>
          <RouterContext { ...renderProps } />
        </Provider>)

      return ReactDOM.renderToString(<Html component={component} location={location} type={type} store={store} />)
    }
    fetchData = fetchingComponentData(store, renderProps, location)
      .then(renderApp)
      .then((res) => view = res)
  })
  yield fetchData
  this.body = view
}
