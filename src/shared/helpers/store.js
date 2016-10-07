import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import * as defaultReducers from '../reducers'

const middleware = [reduxThunk]

export default function configureStore(initialState, reducers) {
  const combinedReducer = combineReducers(reducers || defaultReducers)
  let finalCreateStore

  if (process.browser) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      (window.devToolsExtension ? window.devToolsExtension() : createStore)
    )(createStore)
  } else {
    finalCreateStore = compose(applyMiddleware(...middleware))(createStore)
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
