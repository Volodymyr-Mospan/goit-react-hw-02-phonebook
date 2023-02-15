import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';

// import css from './Contacts.module.css';

export class Contact extends Component {
  handleDeleteContact = e => {
    this.props.onClick(this.props.contact.id);
  };
  render() {
    const { contact } = this.props;

    return (
      <>
        {`${contact.name}: ${contact.number}`}{' '}
        <ContactBtn type="button" onClick={this.handleDeleteContact}>
          Delete
        </ContactBtn>
      </>
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
