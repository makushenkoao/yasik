import React, {memo} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';
import {Colors} from '@shared/const/colors.ts';

type InputVariant = 'default' | 'outlined';

export interface InputProps extends TextInputProps {
  variant?: InputVariant;
  isPassword?: boolean;
  // addon left
  // addon right
  // password input
}

export const Input = memo((props: InputProps) => {
  // TODO: Fix multiline bug
  const {variant = 'default', multiline, isPassword = false} = props;

  return (
    <TextInput
      style={[
        styles.input,
        styles[variant],
        multiline && styles.multiline,
        isPassword && styles.password,
      ]}
      placeholderTextColor={Colors.PLACEHOLDER}
      textAlignVertical="center"
      selectionColor={Colors.ACCENT}
      keyboardAppearance="dark"
      multiline={multiline}
      {...props}
    />
  );
});
