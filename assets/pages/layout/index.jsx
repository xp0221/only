import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Bundle from 'router/bundle';
import NotFound from 'components/NotFound';
import NoAccess from 'components/NoAccess';
import Mod1 from 'bundle-loader?lazy&name=mod1!pages/mod1';
// import loginApi from 'api/login';
import authUtils from 'utils/authUtils';
import './index.less';

//按路由访问顺序
const pageComponents = [Mod1];

const Layout = () => {
  const [renderKey, setRenderKey] = useState(0);

  const { newModules, oldIndexs } = authUtils.getModuleRoles();

  const getRootRedirect = (modules) => {
    if (modules[0].path === window.location.pathname) {
      return modules[0].children[0].path;
    }
    return modules[0].path;
  };

  //TODO 测试使用
  authUtils.testSetModuleRoles();

  useEffect(() => {
    //正式上线启用
    /* loginApi.getModuleRoles({ 'modtypes': authUtils.getModTypes() }).then(res => {
      if (res && res.data.data) {
        authUtils.setModuleRoles(res.data.data);
        setRenderKey(renderKey + 1);
      }
    }) */
  }, []);

  return (
    <div className="container">
      <Header />
      {newModules.length > 0 ? (
        <Switch>
          <Route
            exact
            path={authUtils.getHomePath()}
            render={() => <Redirect to={getRootRedirect(newModules)} />}
          />
          {newModules.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              component={Bundle(pageComponents[oldIndexs[index]])}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      ) : (
        <NoAccess />
      )}
      <Footer />
    </div>
  );
};
export default Layout;
