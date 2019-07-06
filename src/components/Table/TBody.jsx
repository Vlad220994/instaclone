import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TableRowItem from './TableRowItem';
import Spinner from '../spinner/Spinner';
import { removeUser, loadUsers } from '../../redux/actions/users';

class TBody extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users, loading, onDeleted } = this.props;
    return (
      <Fragment>
        {loading ? <Spinner />
          : (
            <Fragment>
              <tbody>
                {users.map((item) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    eMail,
                    removeRequest,
                  } = item;

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
            </Fragment>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, loading, error } = state.usersReducer;

  return {
    users, loading, error,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleted: id => dispatch(removeUser(id)),
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TBody);
