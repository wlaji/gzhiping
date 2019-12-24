import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Button,
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'
import Logo from '../../components/logo/logo'

class Login extends Component {
  state={
    username:'',//用户名
    password:'',//密码
  }
  login=()=>{
    this.props.login(this.state)
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  toRegister=()=>{
    this.props.history.replace('/register');
  }
  render() {
    const {type} = this.state;
    const {msg,redirectTo} = this.props.user;
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar
          mode="dark"
        >硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            {msg?<div className="error-msg">{msg}</div>:null}
            <InputItem onChange={val=>{this.handleChange('username',val)}}>
              用户名:
            </InputItem>
            <WhiteSpace/>  
            <InputItem type="password" onChange={val=>{this.handleChange('password',val)}}>
              密码:
            </InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有账户</Button>  
          </List>    
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state=>{
    return {
      user:state.user
    }
  },
  {login}
)(Login)