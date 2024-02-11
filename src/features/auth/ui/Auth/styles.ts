import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
});
