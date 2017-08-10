import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/index/IndexPage';
import Products from './routes/product/Products';
import Users from './routes/user/Users.js';
import Login from './routes/login/Login.js';
import PageNotFound from './routes/error/404.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/index" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/users" component={Users} />
      <Route path="/404" commponent={PageNotFound} />
    </Router>
  );
}

export default RouterConfig;
