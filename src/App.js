import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
// import Filter from "./Components/Filter/Filter";
// import ContactList from "./Components/ContactList/ContactList";
import React, { Component } from "react";
import { nanoid } from "nanoid";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            value={filter}
            onChange={this.handleFilter}
          ></input>
        </label>
        <ul>
          {contacts.map(
            ({ id, name, number }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={id}>
                  {name}
                  {number}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default App;
