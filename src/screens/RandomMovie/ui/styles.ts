import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  emoji: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: '100%',
    justifyContent: 'space-between',
  },
  error: {
    color: Colors.ERROR,
    marginBottom: 20,
    textAlign: 'center',
  },
});
