import React, { Component } from "react";

import Header from "../Header/Header";
import THead from "../Table/THead";
import TBody from "../Table/TBody";

import "./admin-page.scss";

export default class AdminPage extends Component {
  render() {
    return(
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
