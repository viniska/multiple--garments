import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { Fab } from '@mui/material';
import Content from '../../UserPage/Content';
import Branch from '../../UserPage/UserList/Branch/Branch';

import HeaderComponent from './Header/HeaderComponent';
import SiderComponent from './Sider/SiderComponent';

const { Content: AntdContent, Footer } = Layout;

const MainStructure = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('/dashboard');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowGoToTop(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleMenuItemClick = (path) => {
    setSelectedMenuItem(path);
  };

  const handleAccountClick = () => {
    // handle account click logic here
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderComponent collapsed={collapsed} handleMenuItemClick={handleMenuItemClick} />
      <Layout>
        <HeaderComponent
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
          handleAccountClick={handleAccountClick}
        />
        <Layout style={{ marginLeft: collapsed ? 80 : 200, minHeight: '100vh', marginTop: 64, marginBottom: 0 }}>
          <AntdContent className="content" style={{ margin: '24px 16px', padding: 24, background: 'white', overflowY: 'auto' }}>
            {selectedMenuItem === '/dashboard' && <Content />}
            {selectedMenuItem === '/branch' && <Branch />}
          </AntdContent>
          <Footer style={{ textAlign: 'center' }}>
            It is Under Construction®
            {showGoToTop && (
              <Fab color="primary" size="small" style={{ position: 'fixed', bottom: 20, right: 20 }} onClick={handleGoToTop}>
                <UpOutlined />
              </Fab>
            )}
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainStructure;
