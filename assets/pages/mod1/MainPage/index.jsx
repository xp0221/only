import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import FirstPage from './firstPage';
import Economic from './economic';
import Party from './party';
import './index.less';

@inject('UI')
@observer
class MainPage extends Component {
  render() {
    const { pageType } = this.props.UI;
    console.log('pageType', pageType);
    return (
      <div className="mainpage">
        {pageType === 'firstPage' ? (
          <FirstPage />
        ) : pageType === 'economic' ? (
          <Economic />
        ) : (
          <Party />
        )}
      </div>
    );
  }
}
export default MainPage;
