import React from "react";
import "./spinner.scss";

const Spinner = () => {
  const divStyle = {
    position: "absolute",
    left: "44%"
  };

  return (
    <div style={divStyle} className="spinner lds-css ng-scope spinner">
      <div className="lds-rolling">
        <div />
      </div>
    </div>
  );
};

export default Spinner;
