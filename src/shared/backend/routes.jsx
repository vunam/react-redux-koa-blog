import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Main from './containers/Main/Main.jsx'
import Cms from './containers/Cms/Cms.jsx'

export const routes = (
    <Route path="/cms" component={Main}>
      <IndexRoute component={Cms} />
    </Route>
  )

export default routes
