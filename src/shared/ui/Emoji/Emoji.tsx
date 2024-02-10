import React, {useState} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles.ts';

interface EmojiProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

export const Emoji = (props: EmojiProps) => {
  const {text, style} = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(prevState => !prevState);
  };

  return (
    <TouchableOpacity onPress={handleImageClick} activeOpacity={0.7}>
      <View style={[styles.wrapper, style]}>
        {isFlipped ? (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
        ) : (
          <Image
            source={require('@shared/assets/images/preview-bg-clear.png')}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
