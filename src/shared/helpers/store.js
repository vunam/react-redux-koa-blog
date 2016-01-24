import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers'

export default function configureStore(initialState) {
  const combinedReducer = combineReducers(reducers)

  if (process.browser) {
    const store = (window.devToolsExtension ?
      window.devToolsExtension()(createStore) : createStore)(combinedReducer, initialState)

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers')
        store.replaceReducer(nextReducer)
      })
    }
    return store
  }

  return createStore(combinedReducer, initialState)
}
