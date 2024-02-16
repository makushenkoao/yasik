import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  filterContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sortByTitle: {
    color: Colors.TEXT,
    fontSize: 15,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    margin: 2,
  },
  container: {
    marginTop: 120,
  },
  filterContainer: {
    paddingVertical: 20,
    gap: 10,
  },
  scrollGenres: {
    maxHeight: 120,
  },
  genresWrapper: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  genre: {
    borderColor: Colors.BORDER,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
  },
  genreText: {
    color: Colors.TEXT,
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
  indicator: {
    marginVertical: 20,
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
