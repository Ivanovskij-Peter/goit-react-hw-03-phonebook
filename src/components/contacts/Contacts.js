import React from 'react';

function Contacts({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>:{contact.number}</p>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default Contacts;
