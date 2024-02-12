import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {flex: 1},
  imageBackground: {
    width: '100%',
    height: 400,
    overflow: 'hidden',
    borderRadius: 12,
    justifyContent: 'flex-end',
  },
  imageBackgroundContent: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  imageBackgroundTitle: {
    color: Colors.TEXT,
    fontSize: 20,
    marginBottom: 10,
  },
  imageBackgroundInfoWrapper: {
    gap: 5,
  },
  imageBackgroundInfoContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  imageBackgroundInfoText: {
    color: Colors.TEXT,
  },
  imageBackgroundInfoIcon: {
    tintColor: Colors.TEXT,
    width: 24,
    height: 24,
  },
  scroll: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  list: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
