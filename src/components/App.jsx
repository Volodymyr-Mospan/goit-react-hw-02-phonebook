import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { name, number } = contact;
    this.setState({
      contacts: [
        { name: name, id: nanoid(), number: number },
        ...this.state.contacts,
      ],
    });
  };

  checkingContacts = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className={'container'}>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}
            onCheck={this.checkingContacts}
          />
        </div>

        <div className={'container'}>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onClick={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
