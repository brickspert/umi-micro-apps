import React, { useState } from 'react';
import { useRequest, request, Link } from 'umi';
import { Descriptions, Modal, Breadcrumb } from 'antd';

export default ({ match }: any) => {
  const { userId } = match.params;
  const { data = {} } = useRequest(() => request(`/api/user/detail?id=${userId}`));

  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">用户列表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>用户详情</Breadcrumb.Item>
      </Breadcrumb>

      <h1 style={{ marginBottom: 24 }}>用户详情</h1>

      <Descriptions bordered>
        <Descriptions.Item label="名称">{data.name}</Descriptions.Item>
        <Descriptions.Item label="地址">{data.address}</Descriptions.Item>
        <Descriptions.Item label="入职时间">{data.create}</Descriptions.Item>
        <Descriptions.Item label="年龄">{data.year}</Descriptions.Item>
        <Descriptions.Item label="操作"><a onClick={() => { setVisible(true) }}>设置</a></Descriptions.Item>
      </Descriptions>

      <Modal
        title="用户设置"
        visible={visible}
        onOk={() => { setVisible(false) }}
        onCancel={() => { setVisible(false) }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
