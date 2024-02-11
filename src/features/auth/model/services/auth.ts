import {LoginData, RegisterData} from '../types/auth.ts';
import axios from 'axios';

export const login = async (props: LoginData) => {
  const {email, password} = props;

  try {
    const response = await axios.post('http://localhost:8000/login', {
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
    const response = await axios.post('http://localhost:8000/register', {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Register Errror:', error);
  }
};
