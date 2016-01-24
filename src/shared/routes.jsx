import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Home from './containers/Home/Home.jsx'
import NotFound from './containers/Notfound/Notfound.jsx'

export default (
    <Route path="/">
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
