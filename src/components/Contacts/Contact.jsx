import React from 'react';

export const Contact = ({ contact }) => {
  return <li>{`${contact.name}: ${contact.number}`}</li>;
};
