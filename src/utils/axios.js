import axios from'axios';

// axios.defaults.baseURL = 'http://web.woniulab.com:8002'
// //响应拦截器
// axios.interceptors.response.use(
//     res => res.data,
//     //拦截到响应对象,将响应对象的data属性返回给调用的地方
//     err => Promise.reject(err)
// )


//axios的配置文件,可以在这里去区分开发环境和生产环境等全局一些配置
const devBaseUrl = 'http://localhost:3000/'
const proBaseUrl = 'https://ashublog.ink/'
//process.env返回的是一个包含用户的环境信息,它可以去区分是开发环境还是生产环境
export const BASE_URL = process.env.NODE_ENV=== 'development' ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000
var request = axios.create({
baseURL:BASE_URL,//基准地址
timeout:TIMEOUT
})
//拦截请求
request.interceptors.request.use((config)=>{
return config
})
//拦截响应
request.interceptors.response.use((response)=>{
return response
},function (error){
//对响应的错误做点什么
return Promise.reject(error);
}
)
export default request;


// 使用时就是:
// import request from "@/utils/axios";
// request.get("/api/fund_home/select_by_fund?fund?fund=1001").then(res=>{
//     console.log(res);
// })
    
