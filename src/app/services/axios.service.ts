import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.oioweb.cn',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        // 在请求被发送到服务器之前做些什么
        return config;
      },
      (error: any) => {
        // 处理请求错误
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.data as { code: string, result: any, msg: string };
        return res.result;
      },
      (error: any) => {
        // 处理响应错误
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get(url, config);
  }

  public post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.post(url, data, config);
  }

  public put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.put(url, data, config);
  }

  public delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.delete(url, config);
  }

}
