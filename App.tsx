import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Routes} from '@app/providers/router/Route';
import {ToastProvider} from 'react-native-toast-notifications';
import {Colors} from '@shared/const/colors';
import {UserProvider} from '@app/providers/user/UserProvider';

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
