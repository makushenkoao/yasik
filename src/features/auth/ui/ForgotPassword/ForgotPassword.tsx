import {useState} from 'react';
import {Input} from '@shared/ui/Input';
import {Button as RNButton, View} from 'react-native';
import {Button} from '@shared/ui/Button';
import styles from './styles.ts';

interface ForgotPasswordProps {
  onSubmit: (email: string) => void;
  setLoginScreen: () => void;
  loading?: boolean;
}

const initialState = 'olegpro2046@gmail.com';

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const {onSubmit, setLoginScreen, loading} = props;
  const [email, setEmail] = useState('olegpro2046@gmail.com');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleUpdatePassword = () => {
    onSubmit(email);
    setEmail(initialState);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Email"
        variant="outlined"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
      />
      <View>
        <Button
          content="Submit"
          onPress={handleUpdatePassword}
          loading={loading}
        />
        <RNButton
          title="Login to Existing Account"
          onPress={setLoginScreen}
          disabled={loading}
        />
      </View>
    </View>
  );
};
