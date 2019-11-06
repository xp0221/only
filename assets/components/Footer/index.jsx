import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('UI')
@observer
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handlePageType = (data) => {
    this.props.UI.handlePageType(data);
  };

  render() {
    return (
      <div className="footer-component">
        <div className="footer-font">
          <span className="middlepage" onClick={() => this.handlePageType('firstPage')}>
            首页
          </span>
          <span className="economic" onClick={() => this.handlePageType('economic')}>
            经济
          </span>
          <span className="party" onClick={() => this.handlePageType('party')}>
            大党建
          </span>
        </div>
      </div>
    );
  }
}
export default Footer;
