import React, { Component } from 'react';

import Header from '../Header/Header';
import THead from '../Table/THead';
import TBody from '../Table/TBody';

import './AdminPage.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class AdminPage extends Component {
  render() {
    return (
      <div className="admin-page">
        <Header />
        <h2>Admin Page</h2>
        <table className="table">
          <THead />
          <TBody />
        </table>
      </div>
    );
  }
}
