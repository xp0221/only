import React from 'react';

import Middle from './Middle';
import Left from './Left';
import Right from './Right';
import Label from './label';
import './index.less';
const Party = () => {
  return (
    <div className="party-main-component">
      <div className="label-component">
        <Label />
      </div>
      <div className="foot-component">
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
};
export default Party;
