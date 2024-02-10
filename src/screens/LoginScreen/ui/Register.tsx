import React, {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {View, Button as RNButton} from 'react-native';
import {Button} from '@shared/ui/Button';
import {
  RegisterData,
  RegisterField,
} from '@screens/LoginScreen/model/types/login.ts';
import {PasswordInput} from '@shared/ui/PasswordInput';

interface RegisterProps {
  onSubmit: (data: RegisterData) => void;
  setLoginScreen: () => void;
  loading?: boolean
}

const initialState = {
  name: 'Anton',
  email: 'olegpro2046@gmail.com',
  password: '1407Anton',
};

export const Register = (props: RegisterProps) => {
  const {onSubmit, setLoginScreen, loading} = props;

  const [inputs, setInputs] = useState<RegisterData>({...initialState});

  const handleChange = (name: RegisterField, value: string) => {
    setInputs(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onRegister = () => {
    onSubmit(inputs);
    setInputs({...initialState});
  };

  return (
    <View style={{marginTop: 20, gap: 10}}>
      <Input
        placeholder="Enter First Name"
        variant="outlined"
        value={inputs.name}
        onChangeText={text => handleChange('name', text)}
      />
      <Input
        placeholder="Enter Email"
        autoCapitalize="none"
        keyboardType="email-address"
        variant="outlined"
        value={inputs.email}
        onChangeText={text => handleChange('email', text)}
      />
      <PasswordInput
        placeholder="Enter Password"
        autoCapitalize="none"
        variant="outlined"
        value={inputs.password}
        onChangeText={text => handleChange('password', text)}
      />
      <View>
        <Button content="Sign Up" onPress={onRegister} loading={loading} />
        <RNButton title="Login to existing account" onPress={setLoginScreen} disabled={loading} />
      </View>
    </View>
  );
};
