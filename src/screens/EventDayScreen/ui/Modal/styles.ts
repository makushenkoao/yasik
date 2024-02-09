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
    height: 400,
    backgroundColor: Colors.BACKGROUND,
    borderTopColor: Colors.BORDER,
    borderWidth: 2,
    paddingHorizontal: 24,
    paddingVertical: 30,
    position: 'relative',
  },
  scroll: {
    flexGrow: 1,
  },
  closeButtonWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButton: {
    width: 30,
    height: 30,
    tintColor: Colors.ACCENT,
  },
});
