import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  container: {
    marginTop: 140,
    marginBottom: 40,
  },
  content: {
    height: '100%',
    justifyContent: 'space-between',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.TEXT,
  },
  modalTitle: {
    color: Colors.TEXT,
    fontSize: 18,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    height: 200,
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 30,
    position: 'relative',
    justifyContent: 'space-between',
  },
});
