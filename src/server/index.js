import 'babel-polyfill';
import koa from 'koa'
import route from 'koa-route'
import React from 'react';
import ReactDOM from 'react-dom/server';

import Html from '../shared/placeholder/html.jsx'

const text = 'Babel working'
const app = koa()
const port = 3000

const bundleFile = "http://localhost:8080/app.js"

function *index() {
  this.body = ReactDOM.renderToString(<Html component={""} bundle={bundleFile} />);
}

app.use(route.get('/', index));

app.listen(port, () => {

  console.log('!  🍣  ====  Koa server started at port: ', port)

})