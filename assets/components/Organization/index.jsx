import React from 'react';
import './index.less';
import { Tooltip } from 'antd';

const Organization = (props) => {
  const { companyName, outputData, color, organizationdata } = props;
  return (
    <div className="organization">
      <div className="companyName">
        <Tooltip placement="topLeft" title={companyName}>
          <p>{companyName}</p>
        </Tooltip>
        <p style={{ color: color }}>({organizationdata})</p>
      </div>
      <div className="Border-f">
        <div className="Border" style={{ width: (outputData / 100) * 1.69 + 'rem' }}></div>
      </div>
      <div className="outputData">
        <div>{outputData}%</div>
      </div>
    </div>
  );
};

export default Organization;
