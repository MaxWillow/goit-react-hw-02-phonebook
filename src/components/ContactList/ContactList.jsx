import React from 'react';
import T from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => (
  <ul>
    {filteredContacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: T.arrayOf(T.object).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactList;
