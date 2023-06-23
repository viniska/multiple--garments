import React, { useState } from 'react';
import { Toolbar } from '@mui/material';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import Profile from './Profile/Profile';
import SearchBar from './Search Bar/SearchBar';

const { Header } = Layout;

const HeaderComponent = ({ collapsed, toggleCollapsed, handleAccountClick }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (value) => {
    console.log('Search query:', value);
    // search logic here
  };


  const url = 'https://www.redwolf.in/image/catalog/stickers/marvel-avengers-logo-sticker.jpg';

  return (
    <Header style={{ padding: 0, background: 'linear-gradient(to right, #606c88, #3f4c6b)', position: 'fixed', zIndex: 1, width: '100%' }}>
      <Toolbar>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{ fontSize: '19px', width: 20, height: 44 }}
        />
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}></div>
        <SearchBar handleSearch={handleSearch} />
        <Profile anchorEl={anchorEl} handleAccountMenuClose={handleAccountMenuClose} handleAccountClick={handleAccountClick} url={url} />
      </Toolbar>
    </Header>
  );
};

export default HeaderComponent;
