import React from 'react';
import './index.less';

const TaxPieChart = (props) => {
  const { count, name, maxData, outputData, color } = props;
  return (
    <div className="pieChart">
      <div className="Chart">
        <div className="badge">
          <span className="badge-span">{count}</span>
        </div>
        <div className="pieChart-name">
          <p>{name}</p>
        </div>
      </div>
      <div className="labelBorder">
        <p className="label" style={{ width: `${(outputData / 400000) * 3.69 + 'rem'}` }}></p>
        <p className="outputData">***</p>
      </div>
    </div>
  );
};

export default TaxPieChart;
