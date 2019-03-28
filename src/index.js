import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Admin from './components/admin-page/admin-page';
import AllPosts from './components/posts/AllPosts';
import { Redirect } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => (
                <Redirect to="/login"/>
            )}  exact />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/admin" component={ Admin } />
        <Route path="/posts" component={ AllPosts } />
      </Switch>
    </Router>);
};

ReactDOM.render(<Root />, document.getElementById('root'));