import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AllUsers.scss';

// eslint-disable-next-line react/prefer-stateless-function
class AllUsers extends Component {
  render() {
    return (
      <div className="all-users">
        <ul>
          <li>
            <img src="" alt="" />
            <span>user</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(AllUsers);
