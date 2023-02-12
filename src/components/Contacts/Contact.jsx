import React, { Component } from 'react';

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
