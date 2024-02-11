import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Routes} from '@app/providers/router/Route';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors';
import {UserProvider} from '@app/providers/user/UserProvider';

// TODO:
//  fix lint
//  validation forms
//  input type error, disabled
//  create session, connect session screens
//  matches screens
//  swipeable modal in activity screen
//  add to fav movie
//  подстраивать клавиатуру под инпут при фокусе
//  movie swipe
//  matches history
//  matches details
//  api

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
