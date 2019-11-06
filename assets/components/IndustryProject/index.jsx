import React from 'react';
import './index.less';
import { Tooltip } from 'antd';

const IndustryProject = (props) => {
  const { companyName, outputData, organizationdata } = props;
  return (
    <div className="IndustryProject">
      <div className="IndustryProject-companyName">
        <Tooltip placement="topLeft" title={companyName}>
          <p>{companyName}</p>
        </Tooltip>
        <p>{organizationdata}</p>
      </div>
      <div className="IndustryProject-first">
        <div
          className="IndustryProject-second"
          style={{ width: `${(outputData / 100) * 1.69 + 'rem'}` }}
        ></div>
      </div>
      <div className="IndustryProject-outputData">
        <p>{outputData}%</p>
      </div>
    </div>
  );
};

export default IndustryProject;
