import 'babel-polyfill';
import koa from 'koa'
import React from 'react';
import ReactDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation'
import routes from '../shared/routes.jsx'

import Html from '../shared/base/Html.jsx'

const app = koa()
const port = 3000
const bundleFile = "http://localhost:8080/app.js"

function *renderApp() {
  const location = createLocation(this.url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      this.throw(err.message, 500) 
    } else if (redirectLocation) {
      this.redirect(redirectLocation.pathname + redirectLocation.search);
    }

    const component = <RoutingContext { ...renderProps } />

    this.body = ReactDOM.renderToString(
      <Html component={component} bundle={bundleFile} />
      )
  })
}

app.use(renderApp);

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})