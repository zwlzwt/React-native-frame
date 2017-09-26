import ReduxNavigation from '../Navigation/ReduxNavigation'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.bodyContainer}>
        <ReduxNavigation />
      </View>
    )
  }
}

export default RootContainer
