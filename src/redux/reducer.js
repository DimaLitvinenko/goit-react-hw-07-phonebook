import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, contactsFilter } from './action';
import initialContacts from '../data/contacts.json';

export const contactReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const existContact = state.some(
      el => el.name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (existContact) {
      alert(`this contact already exists`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const setFilterReducer = createReducer('', {
  [contactsFilter]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contact: contactReducer,
  contactsFilter: setFilterReducer,
});
export default rootReducer;
