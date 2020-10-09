import React from 'react';
import { HomeOutlined, ToolOutlined, TableOutlined, FileOutlined } from '@ant-design/icons';

export default [
  {
    key: '/home',
    icon: <HomeOutlined />,
    text: '首页',
  },
  {
    key: '/sub',
    icon: <ToolOutlined />,
    text: '子页面',
    children: [
      {
        text: '子菜单',
        icon: <FileOutlined />,
        children: [
          {
            key: '/sub/sub1',
            text: '子页面1',
          },
          {
            key: '/sub/sub2',
            text: '子页面2',
          },
        ],
      },
    ],
  },
  {
    key: '/demo',
    icon: <TableOutlined />,
    text: 'Demo',
  },
];
