import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {flex: 1},
  imageBackground: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
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
  imageBackgroundContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  imageBackgroundTitle: {
    color: Colors.TEXT,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  imageBackgroundDescription: {
    color: Colors.TEXT,
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 30,
    lineHeight: 20,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  codeButton: {
    backgroundColor: '#444',
    flex: 1,
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeText: {
    color: Colors.TEXT,
    fontSize: 15,
  },
  codeImage: {
    width: 20,
    height: 20,
    tintColor: Colors.TEXT,
  },
  inviteBtn: {
    flex: 1,
  },
  scroll: {flexGrow: 1},
  participantsContainer: {paddingHorizontal: 24},
  participantsTitle: {color: Colors.TEXT, marginBottom: 10, fontSize: 16},
  participantList: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  participantBlock: {
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 12,
  },
  participantName: {
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
});
