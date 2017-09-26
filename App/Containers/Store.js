import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { Platform } from 'react-native'
import thunk from 'redux-thunk'
import reducer from '../States'

const composeEnhancers = composeWithDevTools({ name: Platform.OS === 'ios' ? 'ios' : 'android', realtime: true })
const middleware = [thunk]

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
))

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducer)
  })
}

export default store
