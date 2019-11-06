import React from 'react';
import './index.less';

const OutputLabel = (props) => {
  const { companyName, outputData } = props;
  return (
    <div className="outputLabel">
      <p className="companyName">{companyName}</p>
      <div className="labelBorder">
        <p className="label" style={{ width: `${(outputData / 490000) * 2 + 'rem'}` }}></p>
      </div>
      <p className="outputData">***</p>
    </div>
  );
};

export default OutputLabel;
