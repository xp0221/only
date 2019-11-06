import React from 'react';

const WhiteSpace = (props) => {
  const { width, height, color } = props;
  return (
    <div
      className="white-space"
      style={{
        width: width || '100%',
        height: height || '0.1rem',
        background: color || 'transparent'
      }}
    ></div>
  );
};
export default WhiteSpace;
