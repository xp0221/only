import React from 'react';
import { Progress } from 'antd';
import './index.less';

const ProgressData = (props) => {
  const { title, unit, finished, target, type, percent } = props;
  return (
    <div className="Progress-type">
      {type === 'progress' ? (
        <div className="progress">
          <div className="progress-first">
            <Progress
              type="circle"
              percent={((finished / target) * 100).toFixed(0)}
              format={(percent) => (
                <span>
                  {percent}%
                  <br />
                  {finished}/{target}
                </span>
              )}
              width={50}
              strokeColor={{
                '0%': '#3196FA',
                '100%': '#3196FA'
              }}
              strokeWidth={8}
            />
          </div>
          <p className="Progress-title">
            {title}
            {unit}
          </p>
        </div>
      ) : (
        <div className="progress-f">
          <div className="progress-first">
            <Progress
              type="circle"
              percent={percent}
              format={(percent) => <span> {percent}%</span>}
              width={50}
              strokeColor={{
                '0%': '#3196FA',
                '100%': '#3196FA'
              }}
              strokeWidth={8}
            />
          </div>
          <p className="Progress-title">
            {title}
            {unit}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressData;
