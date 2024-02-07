import React, {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {View} from 'react-native';
import {Button} from '@shared/ui/Button';
import {
  RegisterData,
  RegisterField,
} from '@screens/LoginScreen/model/types/login.ts';
import {PasswordInput} from '@shared/ui/PasswordInput';

interface RegisterProps {
  onSubmit: (data: RegisterData) => void;
  setLoginScreen: () => void;
}

const initialState = {
  firstName: '',
  lastName: '',
  nickname: '',
  email: '',
  password: '',
};

export const Register = (props: RegisterProps) => {
  const {onSubmit, setLoginScreen} = props;

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
        value={inputs.firstName}
        onChangeText={text => handleChange('firstName', text)}
      />
      <Input
        placeholder="Enter Last Name"
        variant="outlined"
        value={inputs.lastName}
        onChangeText={text => handleChange('lastName', text)}
      />
      <Input
        placeholder="Enter Nickname"
        autoCapitalize="none"
        variant="outlined"
        value={inputs.nickname}
        onChangeText={text => handleChange('nickname', text)}
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
        <Button content="Sign Up" onPress={onRegister} />
        <Button
          variant="dark"
          content="Login to existing account"
          onPress={setLoginScreen}
        />
      </View>
    </View>
  );
};
