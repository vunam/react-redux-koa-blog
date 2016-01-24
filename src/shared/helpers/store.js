import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import * as reducers from '../reducers'

const middleware = [promiseMiddleware]

export default function configureStore(initialState) {
  const combinedReducer = combineReducers(reducers)
  let finalCreateStore
  applyMiddleware(...middleware)(createStore)

  if (process.browser) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : createStore
    )(createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(createStore)
  }

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
