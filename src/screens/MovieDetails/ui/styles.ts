import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {flex: 1},
  imageBackground: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.TEXT,
    textAlign: 'center',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: Colors.TEXT,
    marginHorizontal: 5,
  },
  text: {
    color: Colors.TEXT,
    fontSize: 15,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  genre: {
    borderColor: Colors.BORDER,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
  },
  genreText: {
    color: Colors.TEXT,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: Colors.BACKGROUND,
    borderTopColor: Colors.BORDER,
    borderWidth: 2,
    position: 'relative',
  },
  scroll: {
    flexGrow: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  starIcon: {width: 18, height: 18, tintColor: '#adaa06'},
  countries: {
    color: Colors.TEXT,
    paddingVertical: 10,
    textAlign: 'center',
  },
  trailerButton: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    backgroundColor: Colors.HIGHLIGHT,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'center',
  },
  trailerButtonText: {
    fontSize: 18,
    color: Colors.BACKGROUND,
  },
  trailerButtonIcon: {
    tintColor: Colors.BACKGROUND,
    width: 20,
    height: 20,
  },
  trailer: {zIndex: 1000},
});
