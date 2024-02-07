import {StyleSheet} from 'react-native';
import {Colors} from '@shared/const/colors.ts';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 15,
    right: 5,
  },
  plusIcon: {
    width: 50,
    height: 50,
    tintColor: Colors.HIGHLIGHT,
  },

  // new

  todoItem: {
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoInfo: {
    flex: 1,
  },
  priorityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 100,
    position: 'relative',
  },
  rightActionsContainer: {
    flexDirection: 'row',
  },
  leftActionsContainer: {
    flexDirection: 'row',
  },
  actionText: {
    color: Colors.TEXT,
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ERROR,
    borderRadius: 12,
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#388e3c',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    backgroundColor: 'plum',
    height: 20,
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 12,
  },
});
