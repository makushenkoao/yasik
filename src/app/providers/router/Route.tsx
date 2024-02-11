import React from 'react';
import {HomeScreen} from '@screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {LoginScreen} from '@screens/LoginScreen';
import {ProfileScreen} from '@screens/ProfileScreen';
import {ProfileEditScreen} from '@screens/ProfileEditScreen';
import {EventDayScreen} from '@screens/EventDayScreen';
import {RandomMovie} from '@screens/RandomMovie';
import {MovieDetails} from '@screens/MovieDetails';
import {ConnectToSessionScreen} from '@screens/ConnectToSessionScreen';
import {CreateMovieSession} from '@screens/CreateMovieSession';
import {StartSessionScreen} from '@screens/StartSessionScreen';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="ProfileEdit"
      component={ProfileEditScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="EventDay"
      component={EventDayScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="RandomMovie"
      component={RandomMovie}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="MovieDetails"
      component={MovieDetails}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="ConnectToSession"
      component={ConnectToSessionScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="CreateSession"
      component={CreateMovieSession}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="StartSession"
      component={StartSessionScreen}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

export const Routes = () => {
  const {user} = useUser();

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
