import React from "react";

import Header from "../Header/Header";
import Table from "../Table/Table";
import "./admin-page.scss";

const AdminPage = () => {
  const usersData = JSON.parse(localStorage.getItem("usersData"));

  return (
    <div className="admin-page">
      <Header />
      <h2>Admin Page</h2>
      <h3>{`Number of accounts ${usersData.length}`}</h3>
      <Table data={usersData} />
    </div>
  );
};

export default AdminPage;
