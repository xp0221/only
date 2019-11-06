import React, { Component } from 'react';
import { Table } from 'antd';
import './detail.less';

class Detail extends Component {
  render() {
    const columns = [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'data'
      },
      {
        title: '负责科室',
        dataIndex: 'director',
        key: 'director'
      },
      {
        title: '项目详情',
        dataIndex: 'progress',
        key: 'progress'
      }
    ];

    const { dataSource } = this.props;

    return (
      <div className="detail">
        <Table
          className="table"
          rowKey={(record) => record.date}
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default Detail;
