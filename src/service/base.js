import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 30000
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(response => {
  const {code, result} = response.data
  if (code === 0) {
    return Promise.resolve(result)
  }
}, error => {
  return Promise.reject(error)
})

export default request