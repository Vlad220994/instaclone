import React, { Component } from 'react';

import THead from './THead';
import TBody from './TBody';


// eslint-disable-next-line react/prefer-stateless-function
export default class Table extends Component {
  state = {
    data: this.props.data,
  }

  deleteItem = (id) => {
    const newData = this.state.data.filter(item => (
      item.id !== id
    ));
    this.setState(
      { data: newData },
      () => (localStorage.setItem('usersData', JSON.stringify(newData))),
    );
  }

  render() {
    const { data } = this.state;
    return (
      <table className="table">
        <THead />
        <TBody data={data} onDeleted={id => this.deleteItem(id)} />
      </table>
    );
  }
}
