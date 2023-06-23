import React from 'react';
import { Menu } from 'antd';

const MenuItem = ({ icon, title, path, handleMenuItemClick }) => {
  return (
    <Menu.Item key={path} icon={icon} onClick={() => handleMenuItemClick(path)}>
      {title}
    </Menu.Item>
  );
};

export default MenuItem;
