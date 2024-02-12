import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
    textAlign: 'center',
  },
  scroll: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  matchesList: {
    gap: 12,
  },
  matchImageBackground: {
    width: '100%',
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: Colors.BORDER,
    borderWidth: 2,
  },
  matchContainer: {
    height: '100%',
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  matchTitle: {
    color: Colors.TEXT,
    fontSize: 18,
  },
  matchCountWrapper: {
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 12,
  },
  matchCountText: {
    color: Colors.ACCENT,
    fontSize: 16,
  },
  matchInfoWrapper: {
    gap: 10,
  },
  matchInfoContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  matchInfoIcon: {
    tintColor: Colors.TEXT,
    width: 24,
    height: 24,
  },
  matchInfoText: {
    color: Colors.TEXT,
  },
});
