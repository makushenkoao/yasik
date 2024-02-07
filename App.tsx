import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/app/providers/router/Route.tsx';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors.ts';
import {UserProvider} from '@app/providers/user/UserProvider.tsx';

// TODO: fix lint

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
