import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

type ButtonVariant = 'primary' | 'error';

interface ButtonProps extends TouchableOpacityProps {
  content: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  bold?: boolean;
  loading?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    content,
    onPress,
    variant = 'primary',
    style,
    loading,
    bold = false,
    disabled,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && variant === 'primary' && styles.disabled,
        loading && variant === 'primary' && styles.disabled,
        style,
      ]}
      activeOpacity={0.7}
      disabled={disabled || loading}
      onPress={onPress}
      {...rest}>
      {!loading && (
        <Text
          style={[
            styles.text,
            bold && styles.textBold,
            variant === 'error' && styles.textError,
          ]}>
          {content}
        </Text>
      )}
      {loading && <ActivityIndicator size="small" color="#fff" />}
    </TouchableOpacity>
  );
});
