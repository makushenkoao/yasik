import {LoginData} from '@screens/LoginScreen/model/types/login.ts';
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
