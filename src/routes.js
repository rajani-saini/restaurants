import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/home';
import Restaurants from './containers/restaurants';

const routes = (
  <div>
    <Switch>
      <Redirect from='/index.html' to='/' />
      <Route exact path="/" component={Home} />
      <Route path="/restaurants" component={Restaurants} />
    </Switch>
  </div>
);

export default routes;
