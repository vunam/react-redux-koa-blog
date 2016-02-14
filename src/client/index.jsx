import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import routes from '../shared/routes.jsx'
import { Provider } from 'react-redux'
import configureStore from '../shared/helpers/store'

const initState = window.__store
const store = configureStore(initState)
require('concise.css/dist/concise.min.css')
require('../shared/base/base.scss')

render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
