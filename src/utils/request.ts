import axios, { AxiosRequestConfig } from "axios"
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 10000
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"
axios.interceptors.request.use(
  (config): AxiosRequestConfig => {
    const token = window.sessionStorage.getItem("token")
    if (token) {
      ;(config.headers = config.headers || {}).token = token
    }
    return config
  },
  (error) => {
    throw error
  }
)
// 响应拦截
axios.interceptors.response.use((res) => {
  return res.data
})

export default axios;
