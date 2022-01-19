import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/deleteContact');
const contactsFilter = createAction('contact/contactsFilter');

const contactActions = { addContact, deleteContact, contactsFilter };
export default contactActions;
