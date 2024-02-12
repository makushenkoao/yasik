import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#222',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {
    width: 50,
  },
  buttonText: {
    color: Colors.TEXT,
    fontSize: 16,
  },
  container: {
    flex: 1,
    height: '80%',
    width: '100%',
    backgroundColor: Colors.BACKGROUND,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10000,
  },
});
