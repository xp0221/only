import React from 'react';
import './index.less';

const TitleLabel = (props) => {
  const { title, size } = props;
  return (
    <div>
      {size === 'big' ? (
        <div className="titleLabel-big">
          <p className="title">{title}</p>
        </div>
      ) : (
        <div className="titleLabel-small">
          <p className="title">{title}</p>
        </div>
      )}
    </div>
  );
};

export default TitleLabel;
