import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

type ButtonVariant = 'primary' | 'secondary' | 'dark';

interface ButtonProps {
  content: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  bold?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {content, onPress, variant = 'primary', style, bold = false} = props;
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.text, bold && styles.textBold]}>{content}</Text>
    </TouchableOpacity>
  );
});
