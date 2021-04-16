import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';

import { history } from './store/configureStore';

const Routes = () => (
  <ConnectedRouter history={history} >
    <Switch>
      <Route exact path = "/" component={Main} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>

);

export default Routes;