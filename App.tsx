import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Routes} from '@app/providers/router/Route';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors';
import {UserProvider} from '@app/providers/user/UserProvider';

// TODO:
//  handle errors
//  handle loading
//  focus input keyboard
//  API

// server:
// auth (login, register, forgot password)
// user (create, get, put, delete)
// session (create, put)
// matches (create, put)
// favs (create, put, delete)

// Session - id: string | userId: string[] | genres: string[] | matches: Match[]
// Match - id: string | movie: Movie[]
// User - id: string | token: string | name: string | password: string | email: string

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.BACKGROUND,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <ToastProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ToastProvider>
    </NavigationContainer>
  );
}

export default App;
