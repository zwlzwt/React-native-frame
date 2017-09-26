import * as allTypes from './ActionTypes'

export const increment = () => ({
  type: allTypes.INCREMENT_COUNTER
})

export const decrement = () => ({
  type: allTypes.DECREMENT_COUNTER
})

export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    var { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export const incrementAsync = (delay) => {
  delay = delay || 1000
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

export const decrementAsync = (delay) => {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement())
    }, delay)
  }
}
