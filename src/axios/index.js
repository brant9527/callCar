import axios from 'axios'
// import message from 'mint-ui'
// import api from './api'
let path = ''
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  path = 'http://www.meneifrau.com'
} else {
  path = 'http://192.168.1.104'
}

let options = axios.create({
  baseURL: path,
  headers: {
    'Content-Type': 'application/json'
    // 'Access-Control-Allow-Origin': '*'
  }
})
// 添加一个请求拦截器
options.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
options.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  console.log(error)
  return Promise.reject(error)
})

export default options
