import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.ts';
import {RootParamList} from '@shared/types/router.ts';

export type HeaderVariant =
  | 'default'
  | 'home'
  | 'profile'
  | 'close'
  | 'search'
  | 'matches';

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

  const renderIcon = (
    position: 'right' | 'left',
    iconPath: ImageSourcePropType,
    onPress: () => void,
  ) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={
        styles[position === 'left' ? 'leftIconWrapper' : 'rightIconWrapper']
      }
      onPress={onPress}>
      <Image source={iconPath} style={styles.icon} />
    </TouchableOpacity>
  );

  const backIcon = renderIcon(
    'left',
    require('@shared/assets/images/back.png'),
    onBackNavigate,
  );

  const renderContent = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            {renderIcon(
              'left',
              require('@shared/assets/images/profile.png'),
              () => onNavigate('Profile'),
            )}
            {renderIcon(
              'right',
              require('@shared/assets/images/handshake-heart.png'),
              () => onNavigate('Matches'),
            )}
          </>
        );
      case 'profile':
        return (
          <>
            {backIcon}
            {renderIcon(
              'right',
              require('@shared/assets/images/settings.png'),
              () => onNavigate('ProfileEdit'),
            )}
          </>
        );
      case 'search':
        return (
          <>
            {backIcon}
            {renderIcon(
              'right',
              require('@shared/assets/images/filter.png'),
              () => onNavigate('FilterMovies'),
            )}
          </>
        );
      case 'matches':
        return (
          <>
            {backIcon}

            {renderIcon(
              'right',
              require('@shared/assets/images/heart.png'),
              () => onNavigate('FavoriteMovies'),
            )}
          </>
        );
      case 'close':
        return renderIcon(
          'left',
          require('@shared/assets/images/cross.png'),
          () => onNavigate(closeUrl),
        );
      case 'default':
        return backIcon;
      default:
        return backIcon;
    }
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {renderContent()}
    </View>
  );
};
