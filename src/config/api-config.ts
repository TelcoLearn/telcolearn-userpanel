import { handleError } from '@/api/base-api';
import axios, { AxiosInstance } from 'axios';

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000
  });

  instance.interceptors.request.use((config) => {
    // const token = Cookies.load('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        window.location.href = '/login';
      }
      return Promise.reject(handleError(error));
    }
  );

  return instance;
};
