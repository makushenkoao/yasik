import {useEffect, useState} from 'react';
import axios, {AxiosRequestConfig, Method} from 'axios';

interface UseAxiosArgs<T> {
  url: string;
  method: Method;
  body?: object | null;
  headers?: object | null;
}

interface UseAxiosResponse<T> {
  response: T | null;
  error: string;
  loading: boolean;
  refetch: () => void;
}

export function useAxios<T>(props: UseAxiosArgs<T>): UseAxiosResponse<T> {
  const {url, method, body = null, headers = null} = props;

  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = () => {
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

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [method, url, body, headers]);

  return {response, error, loading, refetch};
}
