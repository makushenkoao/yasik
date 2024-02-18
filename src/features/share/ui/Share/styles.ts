import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    tintColor: Colors.HIGHLIGHT,
  },
  iconBtn: {
    zIndex: 1000,
    position: 'absolute',
    top: 10,
    right: 15,
  },
});
