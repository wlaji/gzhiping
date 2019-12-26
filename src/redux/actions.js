import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-types';
import {reqLogin,reqRegister, reqUpdate} from '../api/index';

const authSuccess=(user)=>{
  return {type:AUTH_SUCCESS,data:user}
}

const errorMsg=(msg)=>{
  return {type:ERROR_MSG,data:msg}
}

const receiveUser=(user)=>{
  return {type:RECEIVE_USER,data:user}
}

const resetUser=(user)=>{
  return {type:RESET_USER,data:user}
}

export const register=(user)=>{
  console.log(user)
  const {username,password,password2,type} = user;
  const postData={
    username,
    password,
    type
  }
  if(!username){
    return errorMsg('用户名必须指定')
  }else if(!password){
    return errorMsg('密码必须指定')
  }else if(password!==password2){
    return errorMsg('密码输入不一致')
  }
  return async dispatch=>{
    const res = await reqRegister(postData);
    const result=res.data;
    if(result.code===0){
      //注册成功
      dispatch(authSuccess(result.data))
    }else{
      //注册失败
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login=(user)=>{
  const {username,password} = user;
  if(!username){
    return errorMsg('用户名必须指定')
  }else if(!password){
    return errorMsg('密码必须指定')
  }
  return async dispatch=>{
    const res = await reqLogin(user);
    const result=res.data;
    if(result.code===0){
      //登录成功
      dispatch(authSuccess(result.data))
    }else{
      //登录失败
      dispatch(errorMsg(result.msg))
    }
  }
}

export const updateUser=(user)=>{
  return async dispatch=>{
    const res = await reqUpdate(user);
    const result=res.data;
    if(result.code===0){
      dispatch(receiveUser(result.data))
    }else{
      dispatch(resetUser(result.msg))
    }
  }
}