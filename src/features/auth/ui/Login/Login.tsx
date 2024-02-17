import {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {View, Button as RNButton} from 'react-native';
import {Button} from '@shared/ui/Button';
import {LoginData, LoginField} from '../../model/types/auth.ts';
import {PasswordInput} from '@shared/ui/PasswordInput';
import styles from './styles.ts';

interface LoginProps {
  onSubmit: (data: LoginData) => void;
  setRegisterScreen: () => void;
  setForgotPasswordScreen: () => void;
  loading?: boolean;
}

const initialState = {
  email: 'olegpro2046@gmail.com',
  password: '1407Anton',
};

export const Login = (props: LoginProps) => {
  const {onSubmit, setRegisterScreen, loading, setForgotPasswordScreen} = props;
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
    <View style={styles.container}>
      <Input
        placeholder="Enter Email"
        variant="outlined"
        value={inputs.email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={value => handleChange('email', value)}
      />
      <PasswordInput
        placeholder="Enter Password"
        variant="outlined"
        autoCapitalize="none"
        value={inputs.password}
        onChangeText={value => handleChange('password', value)}
      />
      <View>
        <Button content="Sign In" onPress={onLogin} loading={loading} />
        <RNButton
          title="Register a New Account"
          onPress={setRegisterScreen}
          disabled={loading}
        />
        <RNButton
          title="Forgot Password"
          onPress={setForgotPasswordScreen}
          disabled={loading}
          color="#777"
        />
      </View>
    </View>
  );
};
