import React from 'react';
import './index.less';

const EconomicLabel = (props) => {
  const { title, trueName, trueData, color, planName, planData } = props;
  return (
    <div className="economicLabel">
      <p className="labelTitle" style={{ color: color }}>
        {title}
      </p>
      <div className="true">
        <p className="trueName">{trueName}</p>
        <p className="trueData">{trueData}</p>
      </div>
      <div className="plan">
        <p className="planName">{planName}</p>
        <p className="planData">{planData}</p>
      </div>
    </div>
  );
};

export default EconomicLabel;
