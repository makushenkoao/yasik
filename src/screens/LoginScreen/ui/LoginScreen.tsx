import {SafeAreaView, ScrollView, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Colors} from '@shared/const/colors.ts';
import {useState} from 'react';
import {Login} from '@screens/LoginScreen/ui/Login.tsx';
import {Register} from '@screens/LoginScreen/ui/Register.tsx';
import {
  LoginData,
  RegisterData,
} from '@screens/LoginScreen/model/types/login.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {login} from '@screens/LoginScreen/model/services/login.ts';
import {register} from '@screens/LoginScreen/model/services/register.ts';

// TODO:
//  remake login
//  handle error
//  handle loading
//  forgot password

export const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const userContext = useUser();

  const setLoginScreen = () => {
    setIsLogin(true);
  };

  const setRegisterScreen = () => {
    setIsLogin(false);
  };
  const onRegister = async (data: RegisterData) => {
    setLoading(true);
    register(data)
      .then(() => setIsLogin(true))
      .finally(() => setLoading(false));
  };

  // TODO: fix login in iPhone
  const onLogin = async (data: LoginData) => {
    setLoading(true);
    login(data)
      .then(user => userContext.login(user))
      .finally(() => setLoading(false));
  };

  const emojiText = isLogin
    ? 'Log in to your account to have the functionality of the application 🤖'
    : 'Become a user of a wonderful application 🤖';

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.BACKGROUND,
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 24,
            marginVertical: 20,
            justifyContent: 'space-between',
          }}>
          <Emoji text={emojiText} />
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
    </SafeAreaView>
  );
};
