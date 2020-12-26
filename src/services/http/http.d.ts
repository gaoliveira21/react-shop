import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type IHttpClientConfig = AxiosRequestConfig
export type IResponse<T = any> = AxiosResponse<T>

export type IHttpGetClientParams = { url: string, config?: IHttpClientConfig }
export type IHttpGetClient = <T>(params: IHttpGetClientParams) => Promise<IResponse<T>>

export type IHttpClient = {
  get: IHttpGetClient
}
