import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "$mainHeaderTextColor",
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: 1,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconVisible: {
    backgroundColor: "$primaryBlue",
  },
  checkIcon: {
    width: 18,
  },
});

export default styles;
