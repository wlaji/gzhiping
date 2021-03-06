import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyIcon from '../myIcon/myIcon';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';//在非路由组件使用路由组件的api,比如history,location,math
import './nav-footer.less';

const Item = TabBar.Item;

class NavFooter extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    unReadCount: PropTypes.number.isRequired,
  }
  render() {
    let { navList, unReadCount } = this.props;
    navList = navList.filter(nav => {
      return !nav.hide
    })
    const path = this.props.location.pathname;
    return (
      <div>
        <TabBar tintColor="#1cae82">
          {
            navList.map((nav, index) => {
              return (
                <Item
                  key={nav.path}
                  badge={nav.path === '/message' ? unReadCount : 0}
                  title={nav.text}
                  icon={<MyIcon type={nav.icon} />}
                  selectedIcon={<MyIcon type={nav.icon + '-selected'} />}
                  selected={path === nav.path}
                  onPress={() => this.props.history.replace(nav.path)}>
                </Item>
              )
            })
          }
        </TabBar>
      </div>
    )
  }
}
export default withRouter(NavFooter)//向外暴露withRouter
