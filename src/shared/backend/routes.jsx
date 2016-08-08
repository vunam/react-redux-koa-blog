import React from 'react'
import { Route } from 'react-router'
import Cms from './containers/Cms/Cms.jsx'

export const routes = (
    <Route path="/">
      <Route path="/cms" component={Cms} />
    </Route>
  )

export default routes
