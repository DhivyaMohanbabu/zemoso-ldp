import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseCommunicationPage from '../pages/BaseCommunicationPage';
import LandingPage from '../pages/LandingPage';
import Tables from '../pages/Tables';
import WIPPage from '../pages/WIPPage';

const PagesRouter = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/dashboard" component={WIPPage} />
    <Route exact path="/app" component={LandingPage} />
    <Route exact path="/settings" component={WIPPage} />
    <Route exact path="/others" component={WIPPage} />
    <Route exact path="/tables" component={Tables} />
    <Route exact path="/baseCommunication" component={BaseCommunicationPage} />
  </Switch>
);

export default PagesRouter;
