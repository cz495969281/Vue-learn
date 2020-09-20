import axios from '../utils/request';

export const getCode = () => {
  return axios.get('/getCaptcha')
}
