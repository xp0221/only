import React, { Component } from 'react';
import './index.less';
// import PartyDataLabel from 'components/PartyDataLabel';

const PartyDataLabel = (props) => {
  const { partyData, firstTitle, unit, color } = props;
  return (
    <div className="PartyDataLabel">
      <div className="data" style={{ color: color }}>
        <span>{partyData}</span>
        <span>({unit})</span>
      </div>
      <div className="title">
        <span>{firstTitle}</span>
      </div>
    </div>
  );
};

export default PartyDataLabel;
