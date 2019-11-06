import React from 'react';

import Content from 'components/Content';
import MainPage from 'bundle-loader?lazy&name=MainPage!./MainPage';
import './index.less';

const pageComponents = [MainPage];

const Mod1 = () => {
  return <Content name="mod1" pageComponents={pageComponents} />;
};
export default Mod1;
