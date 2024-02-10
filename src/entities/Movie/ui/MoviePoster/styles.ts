import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 600,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: Colors.TEXT,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
