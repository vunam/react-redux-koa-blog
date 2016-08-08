import { routes as appRoutes } from './app/routes.jsx'
import { routes as backendRoutes } from './backend/routes.jsx'
import path from 'path'

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
