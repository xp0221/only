import React, { Component } from 'react';
import './index.less';

const BigPartyLabel = (props) => {
  const { color, firstData, unit, secondTitle } = props;
  return (
    <div className="bigPartyLabel">
      <div className="Partylabel">
        <div className="firstData">
          <span>{firstData}</span>
        </div>
        <div className="unit">
          <span>{unit}</span>
        </div>
      </div>
      <div className="title-label">
        <span>{secondTitle}</span>
      </div>
    </div>
  );
};

export default BigPartyLabel;
