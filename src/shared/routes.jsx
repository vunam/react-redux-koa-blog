import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Home from './containers/home.jsx'
import NotFound from './containers/notfound.jsx'

export default (
    <Route path="/">
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
