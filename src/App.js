import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { GlobalStyle } from 'config'
import * as pages from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/dashboard" component={pages.Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
