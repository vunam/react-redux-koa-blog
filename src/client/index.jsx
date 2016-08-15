import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import config from '../shared/config'
import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'

const type = window.location.pathname.startsWith(config.backend.baseUrl) ? 'backend' : 'app'
const { routes } = config[type]

const initState = window.__store
const store = configureStore(initState)
require('../shared/base/base.scss')

render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
