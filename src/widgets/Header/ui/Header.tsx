import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './index.ts';
import {RootParamList} from '@shared/types/router.ts';

export type HeaderVariant = 'default' | 'home' | 'profile' | 'close' | 'search';

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
  closeUrl?: string;
}

export const Header = (props: HeaderProps) => {
  const {variant = 'default', title, closeUrl = 'Home'} = props;
  const navigation = useNavigation<RootParamList>();

  const onNavigate = (to: string) => {
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
      case 'search':
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
              onPress={() => onNavigate('FilterMovies')}
              style={styles.rightIconWrapper}>
              <Image
                source={require('@shared/assets/images/filter.png')}
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
            onPress={() => onNavigate(closeUrl)}>
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
