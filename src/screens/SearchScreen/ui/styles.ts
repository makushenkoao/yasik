import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  indicator: {
    marginVertical: 20,
  },
  noResultsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsText: {
    fontSize: 20,
    color: Colors.TEXT,
  },
  container: {
    marginTop: 120,
  },
  inputWrapper: {
    paddingVertical: 20,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    margin: 2,
  },
});
