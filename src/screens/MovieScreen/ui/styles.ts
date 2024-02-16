import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  mb12: {marginBottom: 12},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  title: {
    fontSize: 20,
    color: Colors.HEADER,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: Colors.HEADER,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.HEADER,
    textAlign: 'center',
  },
  done: {
    backgroundColor: Colors.SUCCESS,
  },
  cancel: {
    backgroundColor: Colors.IMPORTANT,
  },
  rateWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  starIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.HIGHLIGHT,
  },
  infoWrapper: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  // BottomSheet
  bottomSheetIndicator: {
    backgroundColor: '#fff',
  },
  bottomSheetTitle: {
    fontSize: 18,
    color: Colors.TEXT,
    textAlign: 'center',
  },
  bottomSheetWrapper: {
    flex: 1,
  },
  bottomSheetContainer: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  bottomDescription: {
    color: Colors.TEXT,
    fontSize: 15,
    lineHeight: 20,
  },
  bottomSheetBackground: {
    backgroundColor: Colors.BACKGROUND,
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
  loadingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
