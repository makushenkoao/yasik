import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 50,
    overflow: 'hidden',
  },
  textContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
