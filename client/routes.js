import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

const createRoutes = () => (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Greetings}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </App>
    </Router>
);

export default createRoutes;
