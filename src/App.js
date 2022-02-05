import "./App.css";
// import ContactForm from "./Components/ContactForm/ContactForm";
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
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevState) => {
      const { contacts } = prevState;
      const newContacts = [newContact, ...contacts];
      return { contacts: newContacts, name: " ", number: " ", filter: "" };
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>

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
        </form>

        {/*         
         <h1>Phonebook</h1>
        <ContactForm addContacts={addContacts} />
        <h2>Contacts</h2>
         <Filter />
         <ContactList />  */}
      </div>
    );
  }
}

export default App;
