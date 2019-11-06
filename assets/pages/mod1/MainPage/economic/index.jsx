import React from 'react';

import Middle from './Middle';
import Left from './Left';
import Right from './Right';
import './index.less';
const Economic = () => {
  return (
    <div className="eco-main-component">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};
export default Economic;
