import React, { Component } from 'react';
import plan from '../../public/imgs/plan.png';
import './index.less';

const IntroducePlan = (props) => {
  const { firstdata, seconddata, title } = props;
  return (
    <div className="IntroducePlan">
      <div className="planData">
        <div className="data">{((`${seconddata}` / `${firstdata}`) * 100).toFixed(2)}%</div>
        <div className="img">
          <img src={plan} />
          <div className="first" style={{ height: 25.89 * (seconddata / firstdata) }}></div>
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="second">
        <div>
          计划
          <span className="firstdata">{firstdata}</span>
        </div>
        <div>
          实际
          <span className="seconddata">{seconddata}</span>
        </div>
      </div>
    </div>
  );
};

export default IntroducePlan;
