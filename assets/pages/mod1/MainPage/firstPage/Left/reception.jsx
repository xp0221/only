import React, { Component } from 'react';
import { Table } from 'antd';
import homeApi from 'api/home';

class Reception extends Component {
  render() {
    const columns = [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'data'
      },
      {
        title: '来访信息',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '时间',
        dataIndex: 'startTime',
        key: 'startTime'
      },
      {
        title: '人数',
        dataIndex: 'number',
        key: 'number'
      },
      {
        title: '陪同领导',
        dataIndex: 'leader',
        key: 'leader'
      },
      {
        title: '负责人',
        dataIndex: 'charger',
        key: 'charger'
      },
      {
        title: '联系人',
        dataIndex: 'contacts',
        key: 'contacts'
      }
    ];

    const { dataSource } = this.props;

    return (
      <div className="reception">
        <Table rowKey={(record) => record.date} columns={columns} dataSource={dataSource} />
      </div>
    );
  }
}

export default Reception;
