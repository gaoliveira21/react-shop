import axios from 'axios'
import { IHttpClient, IHttpGetClientParams, IResponse } from './http'

export const httpClient = (): IHttpClient => {
  const baseURL = 'http://localhost:3333'

  const get = <T>(params: IHttpGetClientParams): Promise<IResponse<T>> => {
    const { url, config } = params
    return axios.get<T, IResponse<T>>(`${baseURL}/${url}`, config)
  }

  return {
    get
  }
}
