import path from 'path'
import { routes as appRoutes } from './app/routes.jsx'
import { routes as backendRoutes } from './backend/routes.jsx'

export default ({
  app: {
    basePath: path.resolve(__dirname, './app'),
    routes: appRoutes,
    baseUrl: '/'
  },
  backend: {
    basePath: path.resolve(__dirname, './backend'),
    routes: backendRoutes,
    baseUrl: '/cms'
  }
})
