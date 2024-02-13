import {ScrollView, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {useState} from 'react';
import {Login} from '../Login/Login.tsx';
import {Register} from '../Register/Register.tsx';
import {LoginData, RegisterData} from '../../model/types/auth.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {login, register} from '../../model/services/auth.ts';
import styles from './styles.ts';
import {useToast} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors.ts';

// TODO:
//  remake login
//  handle error
//  handle loading
//  forgot password
//  TODO: fix login in iPhone

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const userContext = useUser();
  const toast = useToast();

  const setLoginScreen = () => {
    setIsLogin(true);
  };

  const setRegisterScreen = () => {
    setIsLogin(false);
  };

  const onRegister = async (data: RegisterData) => {
    setLoading(true);
    register(data)
      .then(user => {
        if (user) {
          toast.show('Congratulations. Account created successfully!', {
            placement: 'top',
            type: 'success',
            successColor: Colors.ACCENT,
          });
          setIsLogin(true);
        }
      })
      .finally(() => setLoading(false));
  };

  const onLogin = async (data: LoginData) => {
    setLoading(true);
    login(data)
      .then(user => {
        if (user && user.user && user.token) {
          userContext.login({
            user: user.user,
            token: user.token,
          });
        }
      })
      .finally(() => setLoading(false));
  };

  const emojiText = isLogin
    ? 'Log in to your account to have the functionality of the application 🤖'
    : 'Become a user of a wonderful application 🤖';

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Emoji text={emojiText} />
        <View style={styles.container}>
          {isLogin ? (
            <Login
              onSubmit={onLogin}
              setRegisterScreen={setRegisterScreen}
              loading={loading}
            />
          ) : (
            <Register
              onSubmit={onRegister}
              setLoginScreen={setLoginScreen}
              loading={loading}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
