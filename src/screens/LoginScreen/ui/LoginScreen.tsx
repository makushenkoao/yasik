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
import {$api} from '@shared/api/api.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';

export const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const userContext = useUser();

  const setLoginScreen = () => {
    setIsLogin(true);
  };

  const setRegisterScreen = () => {
    setIsLogin(false);
  };
  const onRegister = async (data: RegisterData) => {
    try {
      const response = await $api.post('/register', data);

      setIsLogin(true);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onLogin = async (data: LoginData) => {
    try {
      const response = await $api.post('/login', data);

      userContext.login(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
            <Login onSubmit={onLogin} setRegisterScreen={setRegisterScreen} />
          ) : (
            <Register onSubmit={onRegister} setLoginScreen={setLoginScreen} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
