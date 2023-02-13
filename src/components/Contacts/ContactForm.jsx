import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onSubmit, onCheck } = this.props;
    const isContactsInclude = onCheck(name);

    if (isContactsInclude) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.contactsForm}>
        <label className={css.contactsForm__lable}>
          Name
          <input
            className={css.contactsForm__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={css.contactsForm__lable}>
          Number
          <input
            className={css.contactsForm__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type="submit" className={css.contactsForm__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
