import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import initialContacts from '../data/initContacts.json';

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) =>
    state.some(contact => payload.name === contact.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.contactsFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
