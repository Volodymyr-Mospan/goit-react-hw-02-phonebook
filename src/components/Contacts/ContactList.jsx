import React from 'react';
import { Contact } from 'components/Contacts/';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}></Contact>
      ))}
    </ul>
  );
};
