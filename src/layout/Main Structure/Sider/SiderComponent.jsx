import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardTwoTone, AppstoreTwoTone, AlignLeftOutlined, LoginOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderComponent = ({ collapsed, handleMenuItemClick }) => {
  const handleClick = ({ key }) => {
    if (key === '/login') {
      window.open('/login', '_blank');
    } else if (key === '/register') {
      window.open('/register', '_blank');
    } else {
      handleMenuItemClick(key);
    }
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <DashboardTwoTone />,
      label: 'Dashboard',
    },
    {
      key: "/appform",
      icon: <AppstoreTwoTone />,
      label: 'AppForm',
    },
    {
      key: "/login",
      icon: <LoginOutlined />,
      label: 'Login',
    },
    {
      key: "/register",
      icon: <AlignLeftOutlined />,
      label: 'Register',
    },
  ];

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed} collapsedWidth={0} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <br />
      <br />
      <br />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );


};
export default SiderComponent;