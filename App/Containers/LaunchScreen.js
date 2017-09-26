import { NavigationActions } from 'react-navigation'
import { Text, Button, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Styles/LaunchScreenStyles'

const LaunchScreen = ({ dispatch }) => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.textStyle}>
        欢迎来的首页,你将会拥有自己的计数器!
      </Text>
      <Button
        onPress={() => dispatch(NavigationActions.navigate({ routeName:'CounterScreen' }))}
        title='Go To Counter'
        style={styles.buttonStyle}
      />
    </View>
  )
}

LaunchScreen.navigationOptions = {
  title: 'Home',
}

export default connect(null)(LaunchScreen)
