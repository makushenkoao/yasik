import {StyleSheet} from 'react-native';
import {Colors} from '../../const/colors.ts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 8,
  },
  primary: {
    backgroundColor: Colors.ACCENT,
    padding: 12,
  },
  secondary: {
    backgroundColor: Colors.HIGHLIGHT,
    padding: 12,
  },
  dark: {
    backgroundColor: Colors.SECONDARY,
    padding: 12,
  },
  text: {
    fontSize: 14,
    color: Colors.TEXT,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
