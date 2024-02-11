import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {position: 'relative'},
  buttonContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.ACCENT,
  },
});
