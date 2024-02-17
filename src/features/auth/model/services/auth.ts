import {LoginData, RegisterData} from '../types/auth.ts';
import {$api} from '@shared/api/api.ts';

export const login = async (props: LoginData) => {
  const {email, password} = props;

  try {
    const response = await $api.post('auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
  }
};

export const register = async (props: RegisterData) => {
  const {name, email, password} = props;

  try {
    const response = await $api.post('auth/register', {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Register Error:', error);
  }
};

export const updatePassword = async (email: string) => {
  try {
    const response = await $api.post('auth/update-password', {email});

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
