import React, { Component, Fragment } from "react";

export default class TableRowItem extends Component {
  state = {};

  render() {
    const { firstName, lastName, eMail, removeRequest, onDeleted } = this.props;
    return (
      <Fragment>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{eMail}</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            disabled={!removeRequest}
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </Fragment>
    );
  }
}
