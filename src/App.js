import React, { Component } from 'react';

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminPage from './components/admin-page/AdminPage';
import AllPosts from './components/Posts/AllPosts';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Redirect to="/login" />)
            }
            exact
          />
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/register"
            component={Register}
          />
          <Route
            path="/admin"
            component={AdminPage}
          />
          <Route
            path="/posts"
            component={AllPosts}
          />
        </Switch>
      </Router>
    );
  }
}
