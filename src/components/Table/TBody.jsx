import React, { Component, Fragment } from "react";
import TableRowItem from "./TableRowItem";
import Spinner from "../spinner/spinner";
import { removeUser, loadUsers } from "../../redux/actions/users";
import { connect } from "react-redux";

class TBody extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const {users, loading, onDeleted} = this.props;
    return(
      <Fragment>
        {loading ? <Spinner /> : 
      (<Fragment>
        <tbody>
        {users.map(item => {
          const { id, firstName, lastName, eMail, removeRequest } = item;

          return (
            <tr key={id} className="table-row">
              <TableRowItem
                firstName={firstName}
                lastName={lastName}
                eMail={eMail}
                removeRequest={removeRequest}
                onDeleted={() => onDeleted(id)}
              />
            </tr>
          );
        })}
      </tbody>
      
      <h3>{`Number of accounts ${users.length}`}</h3></Fragment>)}
      
      </Fragment>
    );
  }
} 
  
const mapStateToProps = (state) => {
  const {users, loading, error} = state.usersReducer;
  return {
    users, loading, error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleted: (id) => dispatch(removeUser(id)),
    loadUsers: () => dispatch(loadUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TBody);
