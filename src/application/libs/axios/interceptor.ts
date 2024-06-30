import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { useEffect } from "react";
import { StatusResponse } from "./statusResponse";
import { PagePaths } from "../react-router-dom";
import { useNavigate } from "react-router-dom";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const useInterceptor = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config: AdaptAxiosRequestConfig) => {
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
        if (error.response && error.response.status === StatusResponse.UNAUTHORIZED) {
          navigate(PagePaths.LOGIN);
        }
  
        return Promise.reject(error);
      }
    );
  
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
};
