import axios from 'axios'

// 创建axios实例
let service: any = {}
service = axios.create({
  // baseURL: 'http://172.16.10.124:3000/api', // api的base_url process.env.BASE_API
  baseURL: 'http://192.168.0.101:3000/api',
  method: `get`,
  timeout: 30000, // request timeout
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
})
/**
 * todo
 */
// todo
// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    // Do something with request error
    console.error('error:', error) // for debug
    Promise.reject(error)
  },
)

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response: any) => {
    // if (response.code == 200) {
    //   return response.data
    // }
    return response.data
  },
  (error: any) => {
    console.error('error:' + error) // for debug
    return Promise.reject(error)
  },
)

export default service
