import React, {useState} from 'react';
import {Button, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Input} from '@shared/ui/Input';
import {InputProps} from '@shared/ui/Input/Input.tsx';
import {Colors} from '@shared/const/colors.ts';

type PasswordInputProps = Omit<InputProps, 'secureTextEntry' | 'isPassword'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{position: 'relative'}}>
      <Input
        placeholder="Enter Password"
        secureTextEntry={!isVisible}
        isPassword
        {...props}
      />
      <View style={styles.buttonContainer}>
        {!isVisible ? (
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Image
              source={require('@shared/assets/images/eye-splash.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Image
              source={require('@shared/assets/images/eye.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.ACCENT,
  },
});
