import {
  Image,
  ImageStyle,
  Share as RNShare,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Button} from '@shared/ui/Button';
import styles from './styles.ts';

interface ShareProps {
  type?: 'button' | 'icon';
  shareMessage?: string;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  buttonTitle?: string;
}

export const Share = (props: ShareProps) => {
  const {
    type = 'icon',
    style,
    iconStyle,
    shareMessage = 'Share Message',
    buttonTitle = 'Share',
  } = props;

  const handleShare = () => {
    RNShare.share({
      message: shareMessage,
    })
      .then(result => {
        if (result.action === RNShare.sharedAction) {
          if (result.activityType) {
            console.log('Shared via ', result.activityType);
          } else {
            console.log('Shared');
          }
        } else if (result.action === RNShare.dismissedAction) {
          console.log('Dismissed');
        }
      })
      .catch(err => console.error('Failed to share:', err));
  };

  if (type === 'button') {
    return <Button content={buttonTitle} style={style} onPress={handleShare} />;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.iconBtn, style]}
      onPress={handleShare}>
      <Image
        source={require('@shared/assets/images/share.png')}
        style={[styles.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
};
