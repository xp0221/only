import React, { useState } from 'react';
import { Progress, Modal } from 'antd';
import Detail from './detail';
import './index.less';

const ProgressBig = (props) => {
  const [checkData, setCheckData] = useState(false);
  const [proData, setProData] = useState({});
  const { title, finished, target, projectDetail } = props;
  return (
    <div className="progressBig">
      <p
        className="progressBigTitle"
        role="button"
        onClick={() => {
          setProData(projectDetail), setCheckData(true);
        }}
      >
        {title}
      </p>
      <div className="progressDetail">
        <p className="date">
          <span className="finished">完成{finished}/</span>
          <span className="target">目标{target}</span>
        </p>
        <p className="progress">
          <span className="progressData-name">当前进度</span>
          <span className="progressData">{((`${finished}` / `${target}`) * 100).toFixed(2)}%</span>
        </p>
      </div>

      <Progress
        percent={(`${finished}` / `${target}`) * 100}
        strokeColor={{
          from: '#7AC1FF',
          to: '#5396FF'
        }}
      />

      <Modal
        title="项目详情"
        visible={checkData}
        footer={null}
        maskClosable={true}
        onCancel={() => setCheckData(false)}
        width={500}
      >
        <Detail dataSource={proData} />
      </Modal>
    </div>
  );
};
export default ProgressBig;
