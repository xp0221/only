const paths = {
  modTypes: 'user',
  app: {
    root: '/',
    login: '/login'
  },
  modules: [
    {
      title: '数字驾驶舱',
      path: '/home',
      name: 'home'
    }
  ]
};

let routerPrefix = process.env.APP_PREFIX;
routerPrefix = routerPrefix.substring(0, routerPrefix.length - 1);

const initAppPaths = function(obj) {
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      initAppPaths(obj[key]);
    } else {
      obj[key] = routerPrefix + obj[key];
    }
  }
};

const initModulesPaths = (obj) => {
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      initModulesPaths(obj[key]);
    }
    if (obj[key].path) {
      obj[key].path = routerPrefix + obj[key].path;
    }
  }
};

const initPaths = (obj) => {
  initAppPaths(obj['app']);
  initModulesPaths(obj['modules']);
};

initPaths(paths);

export default paths;
