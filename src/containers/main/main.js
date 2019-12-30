import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  NavBar
} from 'antd-mobile'


import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from '../personal/personal'
import Notfound from '../../components/not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'

import Cookies from 'js-cookie'
import { getRedirectTo } from '../../utils/index'
import { getUser } from '../../redux/actions'

class Main extends Component {
  navList = [
    {
      path: '/laoban',
      component: Laoban,
      title: "大神列表",
      icon: 'dashen',
      text: '大神'
    },
    {
      path: '/dashen',
      component: Dashen,
      title: "老板列表",
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message',
      component: Message,
      title: "消息列表",
      icon: 'message',
      text: '消息'
    },
    {
      path: '/personal',
      component: Personal,
      title: "用户中心",
      icon: 'personal',
      text: '个人'
    }
  ]

  componentDidMount() {
    //登录过，但是没有登录信息，发请求获取对应的user
    const userid = Cookies.get('userid');
    console.log(userid)
    const { _id } = this.props.user;
    if (userid && !_id) {
      this.props.getUser();
    }
  }

  render() {
    //读取cookie中的userid
    const userid = Cookies.get('userid');
    //如果没有，重定向到登录页面
    if (!userid) {
      return <Redirect to="/login" />
    }
    //查看state中有没有user._id信息
    const { user } = this.props;

    //如果，没有，返回null
    if (!user._id) {
      return null
    } else {//如果存在，获取当前的url路径，如果是'/',自动计算重定向的路径
      let path = this.props.location.pathname;
      if (path === '/') {
        path = getRedirectTo(user.type, user.header);
        return <Redirect to={path} />
      }
    }
    const { navList } = this;
    const path = this.props.location.pathname;
    const currentNav = navList.find(nav => {
      return nav.path === path
    })

    if (currentNav) {
      const { type } = user;
      if (type === 'laoban') {
        navList[1].hide = true;
      } else if (type === 'dashen') {
        navList[0].hide = true;
      }
    }

    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : null}
        <Switch>
          {
            navList.map((nav, index) => {
              return <Route path={nav.path} component={nav.component} key={index}></Route>
            })
          }
          <Route path="/laobaninfo" component={LaobanInfo}></Route>
          <Route path="/dasheninfo" component={DashenInfo}></Route>
          <Route component={Notfound}></Route>
        </Switch>

        {currentNav ? <NavFooter navList={this.navList}></NavFooter> : null}
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
  { getUser }
)(Main)