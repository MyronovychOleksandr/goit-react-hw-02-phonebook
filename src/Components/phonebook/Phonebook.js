import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PhonebookForm from "../phonebookForm/PhonebookForm";
import Filter from "../filter/Filter";
import PhonebookList from "../phonebookList/PhonebookList";
import s from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  addContact = (user) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv4(), ...user }],
    }));
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  onHandleFilterContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFiltertdContact = () => {
    return [
      ...this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ),
    ];
  };

  render() {
    return (
      <div className={s.container}>
        <h2 className={s.phonebookHeader}>Phonebook</h2>
        <PhonebookForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h3 className={s.phonebookContactHeader}>Contact</h3>
        <Filter
          filter={this.state.filter}
          onHandleFilterContact={this.onHandleFilterContact}
        />
        <PhonebookList
          contacts={this.getFiltertdContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
