import {AUTH_SUCCESS,ERROR_MSG} from './action-types';
import {reqLogin,reqRegister} from '../api/index';

const authSuccess=(user)=>{
  return {type:AUTH_SUCCESS,data:user}
}

const errorMsg=(msg)=>{
  return {type:ERROR_MSG,data:msg}
}

export const register=(user)=>{
  const {username,password,password2,type} = user;
  if(!username){
    return errorMsg('用户名必须指定')
  }else if(!password){
    return errorMsg('密码必须指定')
  }else if(password!==password2){
    return errorMsg('密码输入不一致')
  }
  return async dispatch=>{
    const res = await reqRegister(username,password,type);
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