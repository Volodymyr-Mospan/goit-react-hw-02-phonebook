import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label className={css.filter__lable}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
