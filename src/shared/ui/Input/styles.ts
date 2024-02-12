import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  input: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    color: Colors.TEXT,
    fontSize: 15,
    textAlignVertical: 'bottom',
  },
  default: {
    borderColor: Colors.SECONDARY,
    borderWidth: 1,
    backgroundColor: Colors.BORDER,
  },
  outlined: {
    borderWidth: 1,
    borderColor: Colors.ACCENT,
  },
  password: {
    paddingVertical: 14,
    paddingLeft: 24,
    paddingRight: 42,
  },
  error: {
    borderColor: Colors.IMPORTANT,
  },
  errorMessage: {
    color: Colors.IMPORTANT,
    marginTop: 5,
  },
});
