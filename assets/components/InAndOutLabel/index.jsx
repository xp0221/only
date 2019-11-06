import React from 'react';
import './index.less';

const InAndOutLabel = (props) => {
  const { title, input, output } = props;
  return (
    <div className="inAndOutLabel">
      <p className="title"></p>
      <div className="data">
        <p className="input">{input}</p>
        <p className="output">{output}</p>
      </div>
    </div>
  );
};

export default InAndOutLabel;
