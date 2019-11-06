import React, { Component } from 'react';
import './index.less';

const BigDataLabel = (props) => {
  const { firstData, secondData, show, firstTitle, secondTitle, unit, color } = props;
  return (
    <div className="bigDataLabel">
      <div className="data">
        <span>{firstData}</span>
      </div>
      <div className="title">
        <span>{firstTitle}</span>
        <span>({unit})</span>
      </div>
    </div>
  );
};

export default BigDataLabel;
