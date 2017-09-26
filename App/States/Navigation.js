import AppNavigation from '../Navigation/AppNavigation'

const firstAction = AppNavigation.router.getActionForPathAndParams('LaunchScreen')
const mainNavState = AppNavigation.router.getStateForAction(firstAction)
const initialNavState = AppNavigation.router.getStateForAction(
  mainNavState
)

export const nav = (state=initialNavState, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
