import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList'
import nextId from 'react-id-generator';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number:''
  };

  componentDidMount() {
    const oldNum = localStorage.getItem('contact');
    if (oldNum) {
      this.setState({
        contacts: JSON.parse(oldNum)
      });
    }
  };
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts.name) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  };

  addContact = (e) => {
    const searchSameName = this.state.contacts
      .map((contact) => contact.name)
      .includes(e.name);

    if (searchSameName) {
      alert(`${e.name} is already in contacts`);
    } else if (e.name.length === 0) {
      alert('the field must not be empty!');
    } else {
      const contact = {
        ...e,
        id: nextId(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
      </div>
    );
  }
}
