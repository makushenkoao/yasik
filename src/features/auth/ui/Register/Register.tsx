import React, {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {View, Button as RNButton} from 'react-native';
import {Button} from '@shared/ui/Button';
import {RegisterData, RegisterField} from '../../model/types/auth.ts';
import {PasswordInput} from '@shared/ui/PasswordInput';
import styles from './styles.ts';

interface RegisterProps {
  onSubmit: (data: RegisterData) => void;
  setLoginScreen: () => void;
  loading?: boolean;
}

const initialState = {
  name: 'Anton',
  email: 'olegpro2046@gmail.com',
  password: '1407Anton',
};

export const Register = (props: RegisterProps) => {
  const {onSubmit, setLoginScreen, loading} = props;

  const [inputs, setInputs] = useState<RegisterData>({...initialState});
  const [errors, setErrors] = useState<Partial<Record<RegisterField, string>>>(
    {},
  );

  const onRegister = () => {
    const {name, email, password} = inputs;
    const newErrors: Partial<Record<RegisterField, string>> = {};

    if (name.length < 3) {
      newErrors.name = 'Name should be at least 3 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(inputs);
      setInputs({...initialState});
      setErrors({});
    }
  };

  const handleChange = (name: RegisterField, value: string) => {
    setErrors(prevState => ({
      ...prevState,
      [name]: '',
    }));

    setInputs(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter First Name"
        variant="outlined"
        value={inputs.name}
        onChangeText={text => handleChange('name', text)}
        error={errors.name}
      />
      <Input
        placeholder="Enter Email"
        autoCapitalize="none"
        keyboardType="email-address"
        variant="outlined"
        value={inputs.email}
        onChangeText={text => handleChange('email', text)}
        error={errors.email}
      />
      <PasswordInput
        placeholder="Enter Password"
        autoCapitalize="none"
        variant="outlined"
        value={inputs.password}
        onChangeText={text => handleChange('password', text)}
        error={errors.password}
      />
      <View>
        <Button content="Sign Up" onPress={onRegister} loading={loading} />
        <RNButton
          title="Login to existing account"
          onPress={setLoginScreen}
          disabled={loading}
        />
      </View>
    </View>
  );
};
