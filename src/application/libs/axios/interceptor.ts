import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { useEffect } from "react";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const useInterceptor = () => {
  const requestInterceptor = axios.interceptors.request.use(
    (config: AdaptAxiosRequestConfig) => {
      
      config.headers.Authorization = `Bearer ${"abcdefghijklmnopqrstuvwxyz1234567890"}`;
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  const responseInterceptor = axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
};
