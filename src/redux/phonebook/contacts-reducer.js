// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import { addContact, fetchContacts, delContact } from './contacts-operations';
// import { search } from './contacts-actions';

// const items = createReducer([], {
//   //===== c createAsyncThunk =====//
//   [addContact.fulfilled]: (state, action) => [...state, action.payload], //(state, { payload }) => [...state, payload],
//   [fetchContacts.fulfilled]: (_, action) => action.payload, // (_, { payload }) => payload,
//   [delContact.fulfilled]: (state, action) =>
//     state.filter(({ id }) => id.toString() !== action.payload.toString()),
// });

// const filter = createReducer('', {
//   [search]: (_, { payload }) => payload,
// });

// const loadingSpinner = createReducer(false, {
//   //===== c createAsyncThunk =====//
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,

//   [delContact.pending]: () => true,
//   [delContact.fulfilled]: () => false,
//   [delContact.rejected]: () => false,
// });

// export default combineReducers({
//   items,
//   filter,
//   loadingSpinner,
// });

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactReject,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactReject,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsReject,
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});

//Vanilla redux
// const contacts = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
