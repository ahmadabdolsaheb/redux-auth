import axios from 'axios';

export function userSignupRequest(userData) {
  return disptach => {
    return axios.post('/api/users', userData);
  }
}
