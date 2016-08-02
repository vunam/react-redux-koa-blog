import 'babel-polyfill'
import koa from 'koa'
import KoaRoute from 'koa-route'

import * as apiHandler from './api-handler'
import appHandler from './app-handler'

const app = koa()
const port = 3000

app.use(KoaRoute.get('/api/posts/latest', apiHandler.getLatestPosts))
app.use(KoaRoute.get('/api/posts/get/:data', apiHandler.getPost))
app.use(KoaRoute.get('/*', appHandler))

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})
