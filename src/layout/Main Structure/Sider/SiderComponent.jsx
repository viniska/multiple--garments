import React from 'react';
import { Layout, Menu } from 'antd';
import { HddTwoTone, ShopTwoTone } from '@ant-design/icons';

const { Sider } = Layout;

const SiderComponent = ({ collapsed, handleMenuItemClick }) => {
  const handleClick = ({ key }) => {
      handleMenuItemClick(key);
    }

  const menuItems = [
    {
      key: "/dashboard",
      icon: <HddTwoTone style={{ fontSize: '19px' }} />,
      label: 'UserList',
    },
    {
      key: "/branch",
      icon: <ShopTwoTone style={{ fontSize: '19px' }} />,
      label: 'Branch',
    },
  ];

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed} collapsedWidth={0} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <br />
      <br />
      <br />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick} style={{ fontSize: '15px' }}>
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