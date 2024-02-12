import React, {memo} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles';
import {Colors} from '@shared/const/colors.ts';

type InputVariant = 'default' | 'outlined';

export interface InputProps extends TextInputProps {
  variant?: InputVariant;
  isPassword?: boolean;
  error?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    variant = 'default',
    multiline,
    error,
    style,
    isPassword = false,
  } = props;

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          styles[variant],
          isPassword && styles.password,
          error ? styles.error : undefined,
          style,
        ]}
        placeholderTextColor={Colors.PLACEHOLDER}
        textAlignVertical="center"
        selectionColor={Colors.ACCENT}
        keyboardAppearance="dark"
        multiline={multiline}
        {...props}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
});
