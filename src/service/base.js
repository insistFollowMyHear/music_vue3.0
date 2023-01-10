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
  const {code} = response.data
  console.log('response:', response)
})

export default request