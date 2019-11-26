import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import * as pages from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/dashboard" component={pages.Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
