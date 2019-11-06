import React from 'react';

import Middle from './Middle';
import Left from './Left';
import Right from './Right';
import './index.less';
const FirstPage = () => {
  return (
    <div className="page-main-component">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};
export default FirstPage;
