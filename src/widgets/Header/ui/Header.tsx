import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '@shared/const/colors.ts';
import {useNavigation} from '@react-navigation/native';

export type HeaderVariant = 'default' | 'home' | 'profile' | 'close';

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
}

export const Header = (props: HeaderProps) => {
  const {variant = 'default', title} = props;
  const navigation = useNavigation();

  const onNavigate = (to: string) => {
    // TODO: fix typescript error
    // @ts-ignore
    navigation.navigate(to);
  };

  const onBackNavigate = () => {
    navigation.goBack();
  };

  const renderContent = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.leftIconWrapper}
              onPress={() => onNavigate('Profile')}>
              <Image
                source={require('@shared/assets/images/profile.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onNavigate('Matches')}
              style={styles.rightIconWrapper}>
              <Image
                source={require('@shared/assets/images/heart.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </>
        );
      case 'profile':
        return (
          <>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.leftIconWrapper}
              onPress={onBackNavigate}>
              <Image
                source={require('@shared/assets/images/back.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onNavigate('ProfileEdit')}
              style={styles.rightIconWrapper}>
              <Image
                source={require('@shared/assets/images/settings.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </>
        );
      case 'close':
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.leftIconWrapper}
            onPress={onBackNavigate}>
            <Image
              source={require('@shared/assets/images/cross.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      case 'default':
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.leftIconWrapper}
            onPress={onBackNavigate}>
            <Image
              source={require('@shared/assets/images/back.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.leftIconWrapper}
            onPress={onBackNavigate}>
            <Image
              source={require('@shared/assets/images/back.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
    }
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  leftIconWrapper: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 60,
    height: 60,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  rightIconWrapper: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    width: 40,
    height: 40,
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
