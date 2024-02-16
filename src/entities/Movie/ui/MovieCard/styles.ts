import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  imageBackground: {
    width: 150,
    aspectRatio: 16 / 26,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: Colors.TEXT,
    padding: 5,
    textAlign: 'center',
  },
  loadingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 243.75,
    borderRadius: 12,
    backgroundColor: '#333',
  },
});
