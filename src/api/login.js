import axios from 'axios';
export const getCode = () => {
  return axios.get('/getCaptcha')
}
