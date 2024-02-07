import React, {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {View} from 'react-native';
import {Button} from '@shared/ui/Button';
import {LoginData, LoginField} from '@screens/LoginScreen/model/types/login.ts';
import {PasswordInput} from '@shared/ui/PasswordInput';

interface LoginProps {
  onSubmit: (data: LoginData) => void;
  setRegisterScreen: () => void;
}

const initialState = {
  nickname: '',
  password: '',
};

export const Login = (props: LoginProps) => {
  const {onSubmit, setRegisterScreen} = props;
  const [inputs, setInputs] = useState<LoginData>({...initialState});

  const handleChange = (name: LoginField, value: string) => {
    setInputs(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onLogin = () => {
    onSubmit(inputs);
    setInputs({...initialState});
  };

  return (
    <View style={{marginTop: 20, gap: 10}}>
      <Input
        placeholder="Enter Nickname"
        variant="outlined"
        value={inputs.nickname}
        autoCapitalize="none"
        onChangeText={value => handleChange('nickname', value)}
      />
      <PasswordInput
        placeholder="Enter Password"
        variant="outlined"
        autoCapitalize="none"
        value={inputs.password}
        onChangeText={value => handleChange('password', value)}
      />
      <View>
        <Button content="Sign In" onPress={onLogin} />
        <Button
          variant="dark"
          content="Register a new account"
          onPress={setRegisterScreen}
        />
      </View>
    </View>
  );
};
