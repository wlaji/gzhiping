import IO from 'socket.io-client'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG,
  MSG_READ
} from './action-types';
import {
  reqLogin,
  reqRegister,
  reqUpdate,
  reqUser,
  reqUserList,
  reqChatMsgList,
  reqReadMsg,
} from '../api/index';

function initIO(dispatch, userid) {
  if (!IO.socket) {
    IO.socket = IO('ws://192.168.10.131:8000');
    IO.socket.on('receiveMsg', function (chatMsg) {
      if (userid === chatMsg.from || userid === chatMsg.to) {
        dispatch(receiveMsg({ chatMsg, userid }))
      }
    })
  }
}

const authSuccess = (user) => {
  return { type: AUTH_SUCCESS, data: user }
}

const errorMsg = (msg) => {
  return { type: ERROR_MSG, data: msg }
}

const receiveUser = (user) => {
  return { type: RECEIVE_USER, data: user }
}

export const resetUser = (user) => {
  return { type: RESET_USER, data: user }
}

const receiveUserList = (userList) => {
  return { type: RECEIVE_USER_LIST, data: userList }
}

const receiveMsgList = ({ users, chatMsgs, userid }) => {
  return { type: RECEIVE_MSG_LIST, data: { users, chatMsgs, userid } }
}

const receiveMsg = ({ chatMsg, userid }) => {
  return { type: RECEIVE_MSG, data: { chatMsg, userid } }
}

const msgRead = ({count, from, to}) => {
  return { type: MSG_READ, data: { count, from, to } }
}


export const register = (user) => {
  const { username, password, password2, type } = user;
  const postData = {
    username,
    password,
    type
  }
  if (!username) {
    return errorMsg('用户名必须指定')
  } else if (!password) {
    return errorMsg('密码必须指定')
  } else if (password !== password2) {
    return errorMsg('密码输入不一致')
  }
  return async dispatch => {
    const res = await reqRegister(postData);
    const result = res.data;
    if (result.code === 0) {
      //注册成功
      getMsgList(dispatch, result.data._id);
      dispatch(authSuccess(result.data))
    } else {
      //注册失败
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login = (user) => {
  const { username, password } = user;
  if (!username) {
    return errorMsg('用户名必须指定')
  } else if (!password) {
    return errorMsg('密码必须指定')
  }
  return async dispatch => {
    const res = await reqLogin(user);
    const result = res.data;
    if (result.code === 0) {
      //登录成功
      getMsgList(dispatch, result.data._id);
      dispatch(authSuccess(result.data))
    } else {
      //登录失败
      dispatch(errorMsg(result.msg))
    }
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    const res = await reqUpdate(user);
    const result = res.data;
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

export const getUser = () => {
  return async dispatch => {
    const res = await reqUser();
    const result = res.data;
    if (result.code === 0) {
      getMsgList(dispatch, result.data._id);
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

export const getUserList = (type) => {
  return async dispatch => {
    const res = await reqUserList(type);
    const result = res.data;
    if (result.code === 0) {
      dispatch(receiveUserList(result.data))
    }
  }
}

async function getMsgList(dispatch, userid) {
  initIO(dispatch, userid);
  const res = await reqChatMsgList();
  const result = res.data;
  if (result.code === 0) {
    const { users, chatMsgs } = result.data;
    //分发同步action
    dispatch(receiveMsgList({ users, chatMsgs, userid }))
  }
}

export const sendMsg = ({ from, to, content }) => {
  return async dispatch => {
    IO.socket.emit('sendMsg', { from, to, content })
  }
}

export const readMsg = (from, to) => {
  return async dispatch => {
    const res = await reqReadMsg(from);
    const result = res.data;
    if (result.code === 0) {
      const count = result.data;
      dispatch(msgRead({ count, from, to }))
    }
  }
}