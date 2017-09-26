import CounterScreen from '../Containers/CounterScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { StackNavigator } from 'react-navigation'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  CounterScreen: { screen: CounterScreen },
}, {
  // initialRouteName: 'LaunchScreen',
  // navigationOptions: {
  //   headerStyle: styles.header
  // }
})

export default PrimaryNav
