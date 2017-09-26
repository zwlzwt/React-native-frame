import { nav } from './Navigation'
import { combineReducers } from 'redux'
import { counter } from './Counter'

const reducer = combineReducers({
  nav,
  counter,
})

export default reducer
