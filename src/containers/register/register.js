import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Radio,
  Button,
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'
import './register.less'

const Item = List.Item;

class Register extends Component {
  state={
    username:'',//用户名
    password:'',//密码
    password2:'',//确认密码
    type:'laoban',//用户类型
  }
  register=()=>{
    this.props.register(this.state);
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  toLogin=()=>{
    this.props.history.replace('/login');
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
            {msg? <div className="error-msg">{msg}</div> : null}
            <InputItem onChange={val=>{this.handleChange('username',val)}}>
              用户名:
            </InputItem>
            <WhiteSpace/>  
            <InputItem type="password" onChange={val=>{this.handleChange('password',val)}}>
              密码:
            </InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val=>{this.handleChange('password2',val)}}>
              确认密码:
            </InputItem>
            <WhiteSpace/>
            <Item>
              <span>用户类型:</span>
              <Radio checked={type==='dashen'} className="my-radio" onChange={()=>{this.handleChange('type','dashen')}}>大神</Radio>
              <Radio checked={type==='laoban'} className="my-radio" onChange={()=>{this.handleChange('type','laoban')}}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账户</Button>  
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
  {register}
)(Register)