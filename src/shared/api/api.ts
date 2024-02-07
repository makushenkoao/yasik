import axios from 'axios';

const __API__ = 'http://localhost:8000/';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = '';
  }
  return config;
});
