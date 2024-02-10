import {StyleSheet} from 'react-native';
import {Colors} from '../../const/colors.ts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginVertical: 8,
    position: 'relative',
    padding: 12,
  },
  primary: {
    backgroundColor: Colors.ACCENT,
  },
  error: {
    borderColor: Colors.IMPORTANT,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: Colors.TEXT,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textError: {
    color: Colors.IMPORTANT,
  },
  disabled: {
    backgroundColor: Colors.DISABLED,
  },
});
