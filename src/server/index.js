import 'babel-polyfill'
import koa from 'koa'
import KoaRoute from 'koa-route'

import apiHandler from './apiHandler'
import reactHandler from './appHandler'

const app = koa()
const port = 3000

app.use(KoaRoute.get('/', reactHandler));
app.use(KoaRoute.get('/api/get_all_posts', apiHandler));

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})