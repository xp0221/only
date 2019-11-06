import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import cx from 'classnames';
import authUtils from 'utils/authUtils';
import Weather from './Weather';
import './index.less';
import logo from 'public/imgs/dp_img/logo.png';

@inject('Breadcrumb', 'UI')
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-component">
        <p>
          <img className="logo" src={logo} alt="" />
        </p>
        <p className="header-title">云栖小镇数字驾驶舱</p>
        <Weather />
      </div>
    );
  }
}
export default injectIntl(withRouter(Header));
