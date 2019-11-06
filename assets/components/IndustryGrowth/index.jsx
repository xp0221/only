import React from 'react';
import pieOptions from './chart.js';
import Echart from 'components/Echart';
import './index.less';

const IndustryGrowth = (props) => {
  return (
    <div className="pieChart-second">
      <Echart options={pieOptions()} />
    </div>
  );
};

export default IndustryGrowth;
