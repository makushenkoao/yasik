import axios from 'axios';
import {RegisterData} from '@screens/LoginScreen/model/types/login.ts';

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
