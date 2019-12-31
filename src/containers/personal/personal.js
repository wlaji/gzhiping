import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'
import {
  Result,
  List,
  Button,
  WhiteSpace,
  Modal,
} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {

  logOut=()=>{
    Modal.alert('退出','确认退出登录吗?',[
      { text: 'Cancel'},
      { text: 'Ok',
        onPress: () => {
          Cookies.remove('userid');
          this.props.resetUser();
        }
      },
    ])
  }
  
  render() {
    const { username, header, type, company, post, salary, info } = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} alt={username} />}
          title={username}
          message={company+`(${type})`}>
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
  },
  {resetUser}
)(Personal)