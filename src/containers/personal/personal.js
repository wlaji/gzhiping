import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Result,
  List,
  Button,
  WhiteSpace,
} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {

  logOut=()=>{

  }
  
  render() {
    const { username, header, type, company, post, salary, info } = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} />}
          title={username}
          message={company}>
        </Result>
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位:{post}</Brief>
            <Brief>简介:{info}</Brief>
            {
              salary?  <Brief>薪资:{salary}</Brief>:null
            }
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Button type="warning" onClick={this.logOut}>退出登录</Button>
        </List>
      </div>

    )
  }
}

export default connect(
  state => {
    return {
      user: state.user
    }
  }
)(Personal)