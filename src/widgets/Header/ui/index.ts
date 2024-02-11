import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  leftIconWrapper: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  rightIconWrapper: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    color: 'white',
    position: 'absolute',
    top: 75,
    right: '50%',
    fontSize: 16,
  },
});
