import { addNavigationHelpers } from 'react-navigation'
import AppNavigation from './AppNavigation'
import { connect } from 'react-redux'
import React from 'react'

const ReduxNavigation = (props) => {
  const { dispatch, nav } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
