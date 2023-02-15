import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input } from 'components/Contacts/';
import css from './Contacts.module.css';

// const initialValues = { name: '', number: '' };

export class ContactForm extends Component {
  // state = {
  //   name: '',
  //   number: '',
  // };

  initialValues = { name: '', number: '' };
  schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('It is required'),
    number: yup.number().required('It is required').positive().integer(),
  });

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { onSubmit, onCheck } = this.props;
    const isContactsInclude = onCheck(values.name);

    if (isContactsInclude) {
      alert(`${values.name} is alredy in contacts.`);
      return;
    }

    onSubmit(values);
    resetForm();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    // const { name, number } = this.state;

    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.schema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label className={css.contactsForm__lable}>
            Name
            <Input
              className={css.contactsForm__input}
              type="text"
              name="name"
            />
            <ErrorMessage name="name" component="p" />
          </label>
          <label className={css.contactsForm__lable}>
            Number
            <Input
              className={css.contactsForm__input}
              type="tel"
              name="number"
            />
            <ErrorMessage name="number" component="p" />
          </label>

          <button type="submit" className={css.contactsForm__btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
