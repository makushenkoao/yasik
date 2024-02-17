import {ScrollView, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {useState} from 'react';
import {Login} from '../Login/Login.tsx';
import {Register} from '../Register/Register.tsx';
import {LoginData, RegisterData} from '../../model/types/auth.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {login, register, updatePassword} from '../../model/services/auth.ts';
import styles from './styles.ts';
import {useToast} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors.ts';
import {ForgotPassword} from '@features/auth/ui/ForgotPassword/ForgotPassword.tsx';

type AuthType = 'login' | 'register' | 'forgot';

export const Auth = () => {
  const [authScreen, setAuthScreen] = useState<AuthType>('login');
  const [loading, setLoading] = useState(false);
  const userContext = useUser();
  const toast = useToast();

  const setLoginScreen = () => {
    setAuthScreen('login');
  };

  const setRegisterScreen = () => {
    setAuthScreen('register');
  };

  const setForgotPasswordScreen = () => {
    setAuthScreen('forgot');
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
          setLoginScreen();
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

  const handleUpdatePassword = (email: string) => {
    setLoading(true);

    updatePassword(email)
      .then(() => {
        setLoginScreen();
        toast.show('The new generated password has been sent to your email!', {
          placement: 'top',
          type: 'success',
        });
      })
      .finally(() => setLoading(false));
  };

  const renderEmojiText = () => {
    switch (authScreen) {
      case 'login':
        return 'Log in to your account to have the functionality of the application 🤖';
      case 'register':
        return 'Become a user of a wonderful application 🤖';
      case 'forgot':
        return 'Generate a new password if you have forgotten it 🤖';
    }
  };

  const renderAuth = () => {
    switch (authScreen) {
      case 'login':
        return (
          <Login
            onSubmit={onLogin}
            setRegisterScreen={setRegisterScreen}
            loading={loading}
            setForgotPasswordScreen={setForgotPasswordScreen}
          />
        );
      case 'register':
        return (
          <Register
            onSubmit={onRegister}
            setLoginScreen={setLoginScreen}
            loading={loading}
          />
        );
      case 'forgot':
        return (
          <ForgotPassword
            setLoginScreen={setLoginScreen}
            loading={loading}
            onSubmit={handleUpdatePassword}
          />
        );
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Emoji text={renderEmojiText()} />
        <View style={styles.container}>{renderAuth()}</View>
      </ScrollView>
    </View>
  );
};
