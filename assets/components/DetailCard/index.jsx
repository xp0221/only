import React from 'react';
import { Progress } from 'antd';
import './index.less';

const DetailCard = (props) => {
  const { name, startDetail, percent } = props;
  const { director, progress } = startDetail;
  return (
    <div className="detailCard">
      <div className="progress">
        <Progress
          type="circle"
          percent={percent}
          width={35}
          strokeColor={{
            '0%': '#3196FA',
            '100%': '#3196FA'
          }}
          strokeWidth={12}
        />
      </div>
      <div className="cardDetail">
        <div className="detailTitle">{name}</div>
        <div className="detailContent">
          <span>科室:</span>
          <p>{director}</p>
        </div>
        <div className="secondContent">
          <span>进展:</span>
          <p>{progress}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
