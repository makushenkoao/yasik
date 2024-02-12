import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  stepTitle: {
    color: Colors.TEXT,
  },
  mb10: {
    marginBottom: 10,
  },
  typesWrapper: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  typeBlock: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.BORDER,
  },
  text: {
    color: Colors.TEXT,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
  },
  gap10: {
    gap: 10,
  },
  scroll: {
    flexGrow: 1,
  },
  // BottmSheet
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
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  bottomDescription: {
    color: Colors.TEXT,
    fontSize: 15,
    lineHeight: 20,
  },
  bottomSheetBackground: {
    backgroundColor: '#222',
  },
});
