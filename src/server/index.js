import 'babel-polyfill'
import koa from 'koa'
import React from 'react'
import KoaRoute from 'koa-route'
import ReactDOM from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../shared/routes.jsx'
import Html from '../shared/base/Html.jsx'

import low from 'lowdb'
import storage from 'lowdb/file-async'

const db = low('db.json', { storage })
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

// Push a post into the database
// db('posts').push({ 
//   title: 'A blog title', 
//   subTitle: 'A sub title', 
//   author: 'An author',
//   date: '2016-01-20T12:00:00',
//   published: true,
//   text: 'Text'
// })

function requestPosts() {
  console.log('aaa')
  return db('posts')
    .chain()
    .filter({published: true})
    .reverse()
    .take(5)
    .value()
}

function *getPosts() {
  const response = yield requestPosts();
  this.body = response;
}

app.use(KoaRoute.get('/', renderApp));
app.use(KoaRoute.get('/api/get_all_posts', getPosts));

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})