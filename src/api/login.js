import axios from '../utils/request';

// 获取验证码
export const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}
// 登录接口
export const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}
