import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  handleDeleteContact = e => {
    // console.log(this.props.contact.id);
    this.props.onClick(this.props.contact.id);
  };
  render() {
    const { contact } = this.props;

    return (
      <li>
        {`${contact.name}: ${contact.number}`}{' '}
        <button type="button" onClick={this.handleDeleteContact}>
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
