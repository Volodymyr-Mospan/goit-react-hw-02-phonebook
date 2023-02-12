import React from 'react';
import { Contact } from 'components/Contacts/';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          // contactId={contact.id}
          contact={contact}
          onClick={onClick}
        ></Contact>
      ))}
    </ul>
  );
};
