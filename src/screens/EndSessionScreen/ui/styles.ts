import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.TEXT,
    textAlign: 'center',
    lineHeight: 30,
    paddingHorizontal: 30,
  },
});
