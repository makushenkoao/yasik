import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  container: {
    marginTop: 140,
    marginBottom: 40,
  },
  content: {
    height: '100%',
    justifyContent: 'space-between',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.TEXT,
  },
});
