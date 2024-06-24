import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useInterceptor } from ".";

export interface Response {
  status: number;
  message: string;
  errors: any;
}

export interface ResponseData<T> extends Response {
  data: T;
}

export const useAxios = () => {
  useInterceptor();
  const abortController = new AbortController();
  const signal = abortController.signal;
  const apiUrl = import.meta.env.VITE_API_URL;

  const get = async <T>(endpoint: string, withCredentials: boolean = true) => {
    const response: AxiosResponse<T> = await axios.get(`${apiUrl}/${endpoint}`, {
      signal,
      withCredentials,
    });
    return response.data;
  };

  const post = async <T, R>(endpoint: string, payload: R, withCredentials: boolean = true) => {
    const response: AxiosResponse<T> = await axios.post(`${apiUrl}/${endpoint}`, payload, {
      signal,
      withCredentials: withCredentials,
    });
    return response.data;
  };

  const put = async <T, R>(endpoint: string, payload: R, withCredentials: boolean = true) => {
    const response: AxiosResponse<T> = await axios.put(`${apiUrl}/${endpoint}`, payload, {
      signal,
      withCredentials,
    });
    return response.data;
  };

  const remove = async <T>(endpoint: string, withCredentials: boolean = true) => {
    const urlComplete = `${apiUrl}/${endpoint}`;
    const response: AxiosResponse<T> = await axios.delete(urlComplete, {
      signal,
      withCredentials,
    });
    return response.data;
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  return { get, post, put, remove };
};
