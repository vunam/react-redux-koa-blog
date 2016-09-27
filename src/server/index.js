import 'babel-polyfill'
import koa from 'koa'
import KoaRoute from 'koa-route'
import bodyParser from 'koa-bodyparser'
import * as apiHandler from './api-handler'
import appHandler from './app-handler'
import assetsHandler from './assets-handler'

const app = koa()
const port = 4000


app.use(bodyParser())
app.use(KoaRoute.get('/api/posts/get/:data', apiHandler.getPost))
app.use(KoaRoute.put('/api/posts/put', apiHandler.putPost))
app.use(KoaRoute.get('/api/posts/*', apiHandler.getPosts))
app.use(KoaRoute.get('/cms/*', appHandler))
app.use(KoaRoute.get('/assets/*', assetsHandler))
app.use(KoaRoute.get('/*', appHandler))

app.listen(port, () => {
  console.log('!  🍣  ====  Koa server started at port: ', port)
})
