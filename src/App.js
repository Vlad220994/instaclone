import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminPage from './components/AdminPage/AdminPage';
import AllPosts from './components/Posts/AllPosts';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/posts" component={AllPosts} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => (
  { isLogin: state.isLogged.isLogin });

export default connect(mapStateToProps)(App);
