import axios from './axios';

export const reqRegister=(postData)=>{
  return axios.post('/register',postData)
}

export const reqLogin=(postData)=>{
  return axios.post('/login',postData)
}

export const reqUpdate=(postData)=>{
  return axios.post('/update',postData)
}
