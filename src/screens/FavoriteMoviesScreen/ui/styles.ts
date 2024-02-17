import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  scroll: {
    flexGrow: 1,
  },
});
