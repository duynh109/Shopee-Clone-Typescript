import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from '../types/auth.type'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessTokenToLS } from './auth'

class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    /**
     * Trick giúp tăng tốc độ truy xuất bộ nhớ: mỗi lần lấy access token từ localstorage thì sẽ truy xuất
     * đến bộ nhớ sẽ chậm hơn so với truy xuất đến ram để lấy biến access_token vì vậy thêm biến access_token sẽ giúp
     * tiết kiệm thời gian truy xuất. Chỉ lấy access token từ localstorage 1 lần duy nhất ở constructor vì constructor chỉ chạy 1 lần
     */

    this.access_token = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.Authorization = this.access_token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          this.access_token = (response.data as AuthResponse).data.access_token
          saveAccessTokenToLS(this.access_token)
        } else if (url === '/logout') {
          this.access_token = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
