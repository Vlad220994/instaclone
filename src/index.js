import React from 'react';
import ReactDOM from 'react-dom';

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminPage from './components/admin-page/AdminPage';
import AllPosts from './components/posts/AllPosts';

import postsData from './data/posts-data';

localStorage.setItem('postsData', JSON.stringify(postsData));

const Root = () => (
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

ReactDOM.render(<Root />, document.getElementById('root'));