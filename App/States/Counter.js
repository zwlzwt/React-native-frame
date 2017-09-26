import * as actionTypes from '../Actions/ActionTypes'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return state + 2
    case actionTypes.DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
