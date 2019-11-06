import React, { Component } from 'react';
import './index.less';

const DetailLabel = (props) => {
  const { color, title, data, unit } = props;
  return (
    <div className="detailLabel">
      <div className="titleDetail">
        <p className="title">{title}</p>
      </div>
      <div className="dataDetail" style={{ color: color }}>
        <span className="data">{data}</span>
        <span className="unit">{unit}</span>
      </div>
    </div>
  );
};
export default DetailLabel;
