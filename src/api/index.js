import axios from './axios';

export const reqRegister=(user)=>{
  return axios.post('/register',user)
}

export const reqLogin=({username,password})=>{
  return axios.post('/login',{username,password})
}

export const reqUpdate=(user)=>{
  return axios.post('/update',user)
}

export const reqUser=()=>{
  return axios.get('/user')
}

export const reqUserList=(type)=>{
  return axios.get('/userlist',{type})
}

export const reqChatMsgList=()=>{
  return axios.get('/msglist')
}

export const reqReadMsg=(from)=>{
  return axios.post('/readmsg',{from})
}