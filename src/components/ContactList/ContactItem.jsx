import React from 'react';
import T from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    <p>{`${contact.name}: ${contact.number}`}</p>
    <button type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: T.shape({
    name: T.string.isRequired,
    number: T.string.isRequired,
  }).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactItem;
