import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Search from './pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Search} path="/search" />
    </BrowserRouter>
  );
};

export default Routes;
