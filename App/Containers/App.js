import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import store from './Store'
import React from 'react'

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
)

export default App
