import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./PhonebookForm.module.css";

const initialState = {
  name: "",
  number: "",
};

class PhonebookForm extends Component {
  state = { ...initialState };

  PropTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const prevContact = this.props.contacts.some((contact) => {
      return contact.name === this.state.name;
    });
    if (prevContact) {
      alert(`${this.state.name} is already in contact`);
      this.setState({ ...initialState });
      return;
    }
    const user = { ...this.state };
    this.props.addContact(user);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              required
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default PhonebookForm;
