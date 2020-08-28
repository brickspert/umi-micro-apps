import React from 'react';

export const layout = {
  title: '商城管理',
  menuDataRender: () => ([{
    name: '商铺管理',
    path: '/shop'
  }, {
    name: '用户管理',
    path: '/user'
  }])
}