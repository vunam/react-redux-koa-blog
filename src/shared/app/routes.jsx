import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Main from './containers/Main/Main.jsx'
import Home from './containers/Home/Home.jsx'
import Category from './containers/Category/Category.jsx'
import NotFound from './containers/NotFound/NotFound.jsx'
import FullArticle from './containers/FullArticle/FullArticle.jsx'

export const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/article/:seo" component={FullArticle} />
    <Route path="/category/:cat" component={Category} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
)

export default routes
