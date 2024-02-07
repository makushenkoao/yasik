import React, {ReactNode} from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import styles from './styles.ts';

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container = (props: ContainerProps) => {
  const {children, style} = props;

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};
