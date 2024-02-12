import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Routes} from '@app/providers/router/Route';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors';
import {UserProvider} from '@app/providers/user/UserProvider';

// TODO:
//  handle errors
//  handle loading
//  validation forms
//  input type error, disabled
//  remake activity set up from modal to bottm sheet
//  add to fav movie
//  focus input keyboard
//  remake movie trailer component
//  API

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
