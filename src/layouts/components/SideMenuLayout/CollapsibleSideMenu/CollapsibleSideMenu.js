import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classPrefix from 'prefix-classnames';
import { useSize } from 'ahooks';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { eq } from 'lodash-es';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './CollapsibleSideMenu.less';
import SideMenu from './SideMenu';

const PREFIX = 'collapsible-sider-menu';
const px = classPrefix(PREFIX);
const { Sider } = Layout;


const getSiderWidth = width => (width > 1600 ? 250 : 208);

const CollapsibleSideMenu = (props) => {
  const { className, selectedKeys, onMenuClick, menuData } = props;
  const { width } = useSize(document.getElementById('root'));

  const siderWidth = useMemo(() => getSiderWidth(width), [width]);

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(menuData.map(item => item.key));

  /* 菜单收起时的openKeys */
  const [openKeysC, setOpenKeysC] = useState([]);

  useEffect(() => {
    const ok = menuData.map(item => item.key);
    if (!eq(ok, openKeys)) {
      setOpenKeys(ok);
    }
  }, [menuData]);

  return (
    <Sider
      className={`${px('root')} ${className}`}
      width={siderWidth}
      collapsed={collapsed}
      collapsedWidth={50}
    >
      <div
        className={px('collapse-button', { collapsed })}
        onClick={() => setCollapsed(!collapsed)}
      >
        <MenuOutlined />
      </div>
      <PerfectScrollbar className={px('side-menu')}>
        <SideMenu
          openKeys={collapsed ? openKeysC : openKeys}
          selectedKeys={selectedKeys}
          data={menuData}
          onClick={onMenuClick}
          onOpenChange={(o) => {
            if (collapsed) {
              setOpenKeysC(o);
            } else {
              setOpenKeys(o);
            }
          }}
        />
      </PerfectScrollbar>
    </Sider>
  );
};


CollapsibleSideMenu.propTypes = {
  className: PropTypes.string,
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  menuData: PropTypes.arrayOf(PropTypes.shape({})),
  onMenuClick: PropTypes.func,
};

CollapsibleSideMenu.defaultProps = {
  className: '',
  selectedKeys: [],
  menuData: [],
  onMenuClick: () => {

  },
};

export default CollapsibleSideMenu;
