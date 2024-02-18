import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    overflow: 'hidden',
  },
  genres: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  genre: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    padding: 10,
  },
  genreText: {
    color: Colors.TEXT,
    fontSize: 16,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  scroll: {
    flexGrow: 1,
  },
  filterContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTitle: {
    color: Colors.TEXT,
    fontSize: 15,
  },
  wrapper: {
    flex: 1,
  },
});

export const selectStyles = {
  doneDark: {color: Colors.HIGHLIGHT},
  inputIOS: {
    color: Colors.HIGHLIGHT,
  },
  placeholder: {
    color: Colors.HIGHLIGHT,
  },
};
