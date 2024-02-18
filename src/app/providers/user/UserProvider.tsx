import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User, getUserDataByToken} from '@entities/User';

interface LoginArgs {
  user: User;
  token: string;
}

interface ContextType {
  user: User | null;
  login: (args: LoginArgs) => void;
  setData: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<ContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  setData: () => {},
});

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log(token);
        if (token) {
          getUserDataByToken().then(user => setUser(user));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUser();
  }, []);

  const setData = (user: User) => {
    setUser(user);
  };

  const login = (args: LoginArgs) => {
    const {user, token} = args;

    setUser(user);
    AsyncStorage.setItem('userToken', token);
  };

  const logout = () => {
    AsyncStorage.removeItem('userToken');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{user, login, logout, setData}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
