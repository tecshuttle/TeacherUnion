import axios from 'axios'

// 判断用户当前运行的环境 开发环境 生产环境
// 访问不同的环境 ，请求不同的地址
// 开发环境  npm run start  ---- development
// 生产环境  npm run build  ---- production
// process.env.NODE_ENV 
const isDev = process.env.NODE_ENV === 'development'

// http://121.89.205.189/admin/banner/add
// 请求是请求 /banner/add
const request = axios.create({ // 自定义axios
  // baseURL: 'http://121.89.205.189/admin'
  // baseURL: isDev ? 'http://localhost:3000/admin' : 'http://121.89.205.189/admin'
  baseURL: isDev ? 'http://localhost:8081' : 'http://localhost:8081'
})

// axios 拦截器
// 请求拦截器

// 响应拦截器
export default request