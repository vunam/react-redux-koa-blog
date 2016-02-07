import 'babel-polyfill'
import koa from 'koa'
import KoaRoute from 'koa-route'

import * as apiHandler from './api-handler'
import appHandler from './app-handler'

const app = koa()
const port = 3000

app.use(KoaRoute.get('/api/get_latest_posts', apiHandler.get_latest_posts));
app.use(KoaRoute.get('/api/get_post/:data', apiHandler.get_post));
app.use(KoaRoute.get('/*', appHandler));

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})