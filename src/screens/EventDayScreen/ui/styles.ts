import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  activityWrapper: {
    gap: 10,
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: Colors.BORDER,
    padding: 15,
  },
  activityLoadingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityTitle: {
    color: Colors.TEXT,
    fontSize: 16,
    textAlign: 'center',
  },
  activityText: {
    color: Colors.TEXT,
  },
  activityTextBold: {
    fontWeight: 'bold',
  },
  link: {
    color: Colors.HIGHLIGHT,
    textAlign: 'center',
  },
});
