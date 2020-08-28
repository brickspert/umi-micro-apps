import React, { useState } from 'react';
import { useRequest, request, MicroAppWithMemoHistory, Link } from 'umi';
import { Descriptions, Drawer, Breadcrumb } from 'antd';

export default ({ match }: any) => {
  const { shopId } = match.params;
  const { data = {} } = useRequest(() => request(`/api/shop/detail?id=${shopId}`));
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">商品列表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>商品详情</Breadcrumb.Item>
      </Breadcrumb>

      <h1 style={{ marginBottom: 24 }}>商品详情</h1>

      <Descriptions bordered>
        <Descriptions.Item label="名称">{data.name}</Descriptions.Item>
        <Descriptions.Item label="地址">{data.address}</Descriptions.Item>
        <Descriptions.Item label="创建时间">{data.create}</Descriptions.Item>
        <Descriptions.Item label="官网">{data.url}</Descriptions.Item>
        <Descriptions.Item label="管理员"><a onClick={() => { setVisible(true) }}>管理员设置</a></Descriptions.Item>
      </Descriptions>

      <Drawer
        title="用户管理"
        visible={visible}
        closable
        width={800}
        destroyOnClose
        onClose={() => { setVisible(false) }}
      >
        <MicroAppWithMemoHistory name="user" url='/' shopId={shopId} />
      </Drawer>
    </div>
  );
}
