import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/index"><Icon type="home" />主页</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="user" />用户</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/404"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
