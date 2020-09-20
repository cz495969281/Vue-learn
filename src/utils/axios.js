// 封装axios的请求, 返回重新封装的数据格式
// 对错误的统一处理
import axios from 'axios';
import errorHandle from './errorHandle'
const instance = axios.create();

instance.interceptors.request.use( (config) => {
  console.log('config: ' + config)
  return config;
}, (err) => {
  debugger
  console.log('err:' + err)
  errorHandle(err)
  return Promise.reject(err);
});

// 响应请求的拦截器
instance.interceptors.response.use((res) => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  }else{
    return Promise.reject(res)
  }
}, (err) => {
  debugger
  console.log('err:' + err)
  errorHandle(err)
  return Promise.reject(err);
});
