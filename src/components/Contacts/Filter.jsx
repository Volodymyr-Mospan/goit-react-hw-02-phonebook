import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from 'components/Contacts/';

// import css from './Contacts.module.css';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
