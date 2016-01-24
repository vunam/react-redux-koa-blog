import React from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'
import routes from '../shared/routes.jsx'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory()

render(
  <Router history={ history } >
    { routes }
  </Router>,
  document.getElementById('root')
)
