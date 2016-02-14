import React from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'
import routes from '../shared/routes.jsx'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'

const history = createBrowserHistory()
const initState = window.__store
const store = configureStore(initState)
require('concise.css/dist/concise.min.css')
require('../shared/base/base.scss')

render(
  <Provider store={ store }>
    <Router history={ history } >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
