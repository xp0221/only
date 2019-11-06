import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import Bundle from 'router/bundle';
import LeftMenu from 'components/LeftMenu';
import NoAccess from 'components/NoAccess';
import NotFound from 'components/NotFound';
import authUtils from 'utils/authUtils';
import './index.less';
import cx from 'classnames';

@inject('UI')
@observer
class Content extends React.Component {
  render() {
    const { collapsed } = this.props.UI;
    const { name, pageComponents } = this.props;
    const { path, children, oldIndexs } = authUtils.testGetSubModules(name);

    const isNoAccess = !children || children.length === 0;

    const getPageComponent = (index) => {
      if (pageComponents && pageComponents[index]) {
        console.log('pageComponents', pageComponents);
        return Bundle(pageComponents[index]);
      }
      if (isNoAccess) {
        return NoAccess;
      }
      return NotFound;
    };
    return (
      <div className="bw-content">
        {!isNoAccess ? <LeftMenu data={children} /> : null}
        <div
          className={cx({
            'right-content': true,
            'right-content-collapsed': collapsed === true,
            'right-content-all': isNoAccess
          })}
        >
          <Switch>
            <Route exact path={path} component={getPageComponent(0)} />
            {children &&
              children.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  component={getPageComponent(oldIndexs[index])}
                />
              ))}
          </Switch>
        </div>
      </div>
    );
  }
}
export default Content;
