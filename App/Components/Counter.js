import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import styles from './Styles/CounterStyles'
import colors from '../Themes/Colors'

const Counter = ({ actionsAll:{ increment, incrementIfOdd, incrementAsync, decrement, decrementAsync, counter, dispatch } }) => (
  <View>
    <View style={styles.displayPanel}>
      <Text style={styles.numberBlock}>{counter}</Text>
      <Text style={styles.unitBlock}>/ times</Text>
    </View>
    <View style={[styles.controlPanel, styles.inline]}>
      <TouchableHighlight onPress={() => dispatch(increment())} style={styles.buttonAddSmall} underlayColor={colors.add.bg}>
        <Text style={[styles.text, styles.textColorAdd]}>+</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(decrement())} style={styles.buttonMinusSmall} underlayColor={colors.minus.bg}>
        <Text style={[styles.text, styles.textColorMinus]}>-</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.controlPanel}>
      <TouchableHighlight onPress={() => dispatch(incrementIfOdd())} style={styles.buttonAdd} underlayColor={colors.add.bg}>
        <Text style={[styles.text, styles.textColorAdd]}>Increment if odd</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => dispatch(incrementAsync())} style={styles.buttonAdd} underlayColor={colors.add.bg}>
        <Text style={[styles.text, styles.textColorAdd]}>Increment async</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => dispatch(decrementAsync())} style={styles.buttonMinus} underlayColor={colors.minus.bg}>
        <Text style={[styles.text, styles.textColorMinus]}>Decrement async</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => dispatch(NavigationActions.back())} style={styles.buttonMinus} underlayColor={colors.minus.bg}>
        <Text style={[styles.text, styles.textColorMinus]}>Go back!</Text>
      </TouchableHighlight>
    </View>
  </View>
)

Counter.propTypes = {
  actionsAll: PropTypes.shape({
    increment: PropTypes.func,
    incrementIfOdd: PropTypes.func,
    incrementAsync: PropTypes.func,
    decrementAsync: PropTypes.func,
    decrement: PropTypes.func,
    counter: PropTypes.number,
  })
}

export default Counter
