import {useState} from 'react';
import axios, {AxiosRequestConfig, Method} from 'axios';

interface UseAxiosArgs {
  url: string;
  method: Method;
  body?: object | null;
  headers?: object | null;
}

interface UseAxiosResponse<T> {
  response: T | null;
  error: string;
  loading: boolean;
  fetchData: () => void;
}

export function useAxios<T>(props: UseAxiosArgs): UseAxiosResponse<T> {
  const {url, method, body = null, headers = null} = props;

  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    const requestOptions: AxiosRequestConfig = {
      method,
      url,
      headers: headers ? JSON.parse(JSON.stringify(headers)) : undefined,
      data: body ? JSON.parse(JSON.stringify(body)) : undefined,
    };

    axios(requestOptions)
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {response, error, loading, fetchData};
}
