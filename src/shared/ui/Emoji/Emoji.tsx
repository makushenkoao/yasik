import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.ts';

interface EmojiProps {
  text: string;
}

export const Emoji = (props: EmojiProps) => {
  const {text} = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(prevState => !prevState);
  };

  return (
    <TouchableOpacity onPress={handleImageClick} activeOpacity={0.7}>
      <View style={styles.wrapper}>
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
