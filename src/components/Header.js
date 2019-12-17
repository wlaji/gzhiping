import React from 'react';
import { NavBar} from 'antd-mobile';

const Header = () => {
  return (
    <div>
      <NavBar
        mode="dark"
        leftContent="ele.me"
        rightContent={[
          <span key="0">登录</span>,
          <span key="1">|</span>,
          <span key="2">注册</span>,
        ]}
      ></NavBar>
    </div>
  )
}

export default Header;