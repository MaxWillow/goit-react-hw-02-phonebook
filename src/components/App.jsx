import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (existedContact) {
      // eslint-disable-next-line no-alert
      alert(`${name} is aleready in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 && (
          <>
            <Filter filterValue={filter} onFilterChange={this.onFilterChange} />
            <ContactList
              filteredContacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </div>
    );
  }
}
