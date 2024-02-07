import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {HomeScreen} from '@screens/HomeScreen';
import {Colors} from '@shared/const/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieScreen} from '@screens/MovieScreen';
import {ProfileScreen} from '@screens/ProfileScreen';
import {TodoScreen} from '@screens/TodoScreen';
import {CreateTodoScreen} from '@screens/CreateTodoScreen';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {LoginScreen} from '@screens/LoginScreen';
import {AccountScreen} from '@screens/AccountScreen';
import {SettingsScreen} from '@screens/SettingsScreen';
import {AboutScreen} from '@screens/AboutScreen';
import {SupportScreen} from '@screens/SupportScreen';

const Tab = createBottomTabNavigator();
const MovieStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();

interface TabIconProps {
  focused?: boolean;
  source?: ImageSourcePropType;
}

const TabIcon = ({focused, source}: TabIconProps) => (
  <Image style={[styles.icon, focused && styles.activeIcon]} source={source} />
);

const getTabScreenOptions = (title: string, source: ImageSourcePropType) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    TabIcon({
      focused,
      source,
    }),
  tabBarLabel: title,
  tabBarActiveTintColor: Colors.HIGHLIGHT,
  tabBarInactiveTintColor: Colors.SECONDARY,
  tabBarStyle: {backgroundColor: '#333'},
  headerShown: false,
});

const getStackScreenOptions = (title: string) => ({
  title,
  headerTintColor: Colors.HIGHLIGHT,
  headerStyle: {backgroundColor: '#222'},
});

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={getStackScreenOptions('Welcome!')}
    />
    <HomeStack.Screen
      name="Todo"
      component={TodoScreen}
      options={getStackScreenOptions('Checklist')}
    />
    <HomeStack.Screen
      name="CreateTodo"
      component={CreateTodoScreen}
      options={getStackScreenOptions('Create Task')}
    />
  </HomeStack.Navigator>
);

const MovieStackNavigator = () => (
  <MovieStack.Navigator>
    <MovieStack.Screen
      name="Movie"
      component={MovieScreen}
      options={{
        ...getStackScreenOptions('Movie'),
        headerShown: false,
      }}
    />
  </MovieStack.Navigator>
);

const ProfileStackNavigator = () => {
  const {user, logout} = useUser();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...getStackScreenOptions('Profile'),
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={logout}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: Colors.HIGHLIGHT,
                  marginRight: 10,
                }}
                source={require('@shared/assets/images/logout.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ProfileStack.Screen
        name="Account"
        component={AccountScreen}
        options={getStackScreenOptions('Account')}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={getStackScreenOptions('Settings')}
      />
      <ProfileStack.Screen
        name="About"
        component={AboutScreen}
        options={getStackScreenOptions('About')}
      />
      <ProfileStack.Screen
        name="Support"
        component={SupportScreen}
        options={getStackScreenOptions('Support')}
      />
    </ProfileStack.Navigator>
  );
};

export const Routes = () => {
  const {user} = useUser();

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={getTabScreenOptions(
          'Home',
          require('@shared/assets/images/home.png'),
        )}
      />
      <Tab.Screen
        name="MovieStack"
        component={MovieStackNavigator}
        options={getTabScreenOptions(
          'Movie',
          require('@shared/assets/images/movie.png'),
        )}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={getTabScreenOptions(
          'Profile',
          require('@shared/assets/images/profile.png'),
        )}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.SECONDARY,
  },
  activeIcon: {
    tintColor: Colors.HIGHLIGHT,
  },
});
