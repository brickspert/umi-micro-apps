import React from 'react';
import { useRequest, request, Link, connectMaster } from 'umi';
import { Table } from 'antd';

const UserList = (props: any) => {
  const { shopId } = props;
  const { data = [] } = useRequest(() => request(`/api/user/list?shopId=${shopId}`));

  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'address',
      title: '住址',
    },
    {
      dataIndex: 'id',
      title: '操作',
      render: (id: string) => (
        <Link to={`/${id}`}>详情</Link>
      )
    },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>用户列表</h1>

      <Table rowKey="id" columns={columns} dataSource={data} />

    </div>
  );
}

export default connectMaster(UserList);
