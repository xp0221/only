//进出口额
import React, { Component } from 'react';
import './index.less';

const ImportExport = (props) => {
  const { firstData, secondData, title } = props;
  return (
    <div className="importExport">
      <div className="title">{title}</div>
      <div className="data">
        <span className="firstData">{firstData}</span>
        <span>/</span>
        <span className="secondData">{secondData}</span>
      </div>
      <div className="third"></div>
    </div>
  );
};

export default ImportExport;
