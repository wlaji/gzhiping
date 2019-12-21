import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Button,
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends Component {
  state={
    username:'',//用户名
    password:'',//密码
  }
  register=()=>{
    console.log(this.state)
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
    return (
      <div>
        <NavBar
          mode="dark"
        >硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val=>{this.handleChange('username',val)}}>
              用户名:
            </InputItem>
            <WhiteSpace/>  
            <InputItem type="password" onChange={val=>{this.handleChange('password',val)}}>
              密码:
            </InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有账户?</Button>  
          </List>    
        </WingBlank>
      </div>
    )
  }
}