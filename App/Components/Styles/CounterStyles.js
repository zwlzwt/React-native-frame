import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  displayPanel: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  controlPanel: {
    marginVertical: 30
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  numberBlock: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
  unitBlock: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  textColorAdd: {
    color: colors.add.font,
  },
  textColorMinus: {
    color: colors.minus.font,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonAddSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    width: 80,
  },
  buttonMinusSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    width: 80,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonMinus: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    paddingLeft: 10,
    paddingRight: 10
  }
})
