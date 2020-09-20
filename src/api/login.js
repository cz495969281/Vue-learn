import axios from '../utils/request';

export const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}
