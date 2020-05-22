import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Users from '../components/Users'
import Description from '../components/Description'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Users} />
      <Route path="/description/:login" exact component={Description} />
    </Switch>
  );
}

export default Routes;