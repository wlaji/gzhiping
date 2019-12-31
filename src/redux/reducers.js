import { combineReducers } from 'redux'
import { 
  AUTH_SUCCESS, 
  ERROR_MSG, 
  RESET_USER, 
  RECEIVE_USER,
  RESET_USER_LIST,
} from './action-types'
import { getRedirectTo } from '../utils/index'
import { resetUser } from './actions';
const initUser = {
  username: '',
  type: '',
  msg: '',
  reditectTo: ''
}
function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const { type, header } = action.data;
      return { ...action.data, redirectTo: getRedirectTo(type, header) };
    case ERROR_MSG:
      return { ...state, msg: action.data };
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser,msg:action.data}
    default:
      return state;
  }
}

function userList(state = [], action) {
  switch (action.type) {
    case RESET_USER_LIST:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  user,
  userList
})