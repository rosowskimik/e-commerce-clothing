import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Hats from './pages/hats/hats.component';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hats} />
      </Switch>
    </Fragment>
  );
};

export default App;
