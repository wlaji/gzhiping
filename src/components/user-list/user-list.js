import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import {
  WingBlank,
  WhiteSpace,
  Card,
  Result
} from 'antd-mobile'
const Header = Card.Header;
const Body = Card.Body;

class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }
  render() {
    const { userList } = this.props;
    if (userList.length === 0) {
      return (
        <Result
          style={{ paddingBottom: '50px', paddingTop: '45px' }}
          img={<img src='https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg' alt="" />}
          title="获取列表为空"
          message={<span>请刷新重置</span>}
        />
      )
    }
    return (
      <WingBlank style={{overflow:'auto', paddingBottom: '50px', paddingTop: '45px' }}>
        {
          userList.map(user => {
            return (
              <div key={user._id}>
                <WhiteSpace />
                <Card onClick={()=>this.props.history.push(`/chat/${user._id}`)}>
                  <Header
                    thumb={user.header ? require(`../../assets/images/${user.header}.png`) : require(`../../assets/images/user.jpg`)}
                    thumbStyle={{ width: '35px', height: '35px' }}
                    extra={user.username}>
                  </Header>
                  <Body>
                    <div>职位:{user.post}</div>
                    {
                      user.company ? <div>公司:{user.company}</div> : null
                    }
                    {
                      user.salary ? <div>月薪:{user.salary}</div> : null
                    }
                    <div>描述:{user.info}</div>
                  </Body>

                </Card>

              </div>
            )
          })
        }
      </WingBlank>
    )
  }
}

export default withRouter(UserList)