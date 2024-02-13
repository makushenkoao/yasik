import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const __API__ = 'https://yasik-server.vercel.app/api';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use(async config => {
  if (config.headers) {
    const token = await AsyncStorage.getItem('userToken');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
