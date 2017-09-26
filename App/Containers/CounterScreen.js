import Counter from '../Components/Counter'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as counterActions from '../Actions/Counter'
import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

const CounterScreen = (props) => (
  <View>
    <Counter actionsAll={props} />
  </View>
)

CounterScreen.navigationOptions = {
  title: 'Counter'
}

CounterScreen.propTypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  ...counterActions,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)
