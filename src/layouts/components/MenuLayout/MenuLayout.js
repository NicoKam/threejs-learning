import React, { useMemo } from 'react';
import classPrefix from 'prefix-classnames';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { history } from 'umi';
import BaseHeader, { HSpace, Item, Logo, Title } from '../BaseHeader';
import TopMenu from '../TopMenu';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import SideMenuLayout from '../SideMenuLayout';
import './MenuLayout.less';

const { Header, Content } = Layout;


const PREFIX = 'base-layout';
const px = classPrefix(PREFIX);

const findPrefixSelectedIndex = (menu, key = '') => {
  for (let i = 0; i < menu.length; i += 1) {
    const item = menu[i];
    if (key === item.key) {
      return [i];
    }
    if (Array.isArray(item.children)) {
      const res = findPrefixSelectedIndex(item.children, key);
      if (Array.isArray(res)) {
        return [i, ...res];
      }
    }
  }
  return false;
};

const handleMenuClick = (item) => {
  if (item.key) {
    history.push(item.key);
  }
};


const MenuLayout = (props) => {
  const { children, location, menuData, onSearch } = props;

  /* 根据路由找出当前匹配的菜单 */
  const matchedMenuIndex = useMemo(() => findPrefixSelectedIndex(menuData, location.pathname), [menuData, location.pathname]);

  /* 找出顶级菜单的key和子菜单 */
  const { key: topMenuKey, children: subMenu } = useMemo(() => {
    if (Array.isArray(matchedMenuIndex)) {
      return menuData[matchedMenuIndex[0]];
    }
    return {};
  }, [matchedMenuIndex]);

  const topMenu = useMemo(() => menuData.map(({ children: nouse, ...item }) => item), [menuData]);

  return (
    <Layout className={`${px('root')}`}>
      {/* 顶栏 */}
      <Header className={px('header')}>
        <BaseHeader>
          <Logo />
          <Title>Whale Cloud</Title>
          <HSpace size={50} />
          <TopMenu
            selectedKeys={[topMenuKey]}
            data={topMenu}
            onClick={handleMenuClick}
            style={{ flex: 1 }}
          />
          <Item>
            <SearchBar onSearch={onSearch} />
          </Item>
          <Item text>消息</Item>
          <Avatar />
        </BaseHeader>
      </Header>
      <Content className={px('content')}>
        {subMenu ? (
          <SideMenuLayout {...props} menuData={subMenu} />
        ) : children}
      </Content>
    </Layout>
  );
};

MenuLayout.propTypes = {
  menuData: PropTypes.array,
  onSearch: PropTypes.func,
};
MenuLayout.defaultProps = {
  menuData: [],
  onSearch: () => undefined,
};

export default MenuLayout;
