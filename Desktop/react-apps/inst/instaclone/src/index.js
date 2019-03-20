import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Admin from './components/admin-page/admin-page';
import allPosts from './components/posts/all-posts';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component="App" exact />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/admin" component={ Admin } />
        <Route path="/posts" component={ allPosts } />
      </Switch>
    </Router>);
};

ReactDOM.render(<Root />, document.getElementById('root'));