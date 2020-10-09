import React from 'react';
import classPrefix from 'prefix-classnames';
import { Layout } from 'antd';
import CollapsibleSideMenu from './CollapsibleSideMenu';
import './SideMenuLayout.less';

const PREFIX = 'side-menu-layout';
const px = classPrefix(PREFIX);

const { Content } = Layout;

const SideMenuLayout = (props) => {
  const { children, history, location, menuData = [] } = props;

  const handleSideMenuClick = (item) => {
    if (item.key) {
      history.push(item.key);
    }
  };
  return (
    <Layout className={px('root')}>
      {/* 侧边栏 */}
      <CollapsibleSideMenu
        selectedKeys={[location.pathname]}
        menuData={menuData}
        onMenuClick={handleSideMenuClick}
      />
      <Content className={px('content')}>
        {children}
      </Content>
    </Layout>
  );
};

export default SideMenuLayout;
