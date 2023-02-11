import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label>
        Find contacts
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    );
  }
}
