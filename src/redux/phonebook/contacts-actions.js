// import { createAction } from '@reduxjs/toolkit';

// export const search = createAction('contactsForm/search');

//===== без createAsyncThunk =====//

// export const addContactRequest = createAction('inputsForm/addContactRequest');
// export const addContactSuccess = createAction('inputsForm/addContactSuccess');
// export const addContactError = createAction('inputsForm/addContactError');

// export const fetchContactsRequest = createAction('contactList/fetchContactsRequest');
// export const fetchContactsSuccess = createAction('contactList/fetchContactsSuccess');
// export const fetchContactsError = createAction('contactList/fetchContactsError');

// export const delContactRequest = createAction('contactData/delContactRequest');
// export const delContactSuccess = createAction('contactData/delContactSuccess');
// export const delContactError = createAction('contactData/delContactError');

import { createAction } from '@reduxjs/toolkit';

// export const fetchContactsRequest = createAction("contact/fetchContactRequest")
// export const fetchContactsSuccess = createAction("contact/fetchContactSuccess")
// export const fetchContactsReject = createAction("contact/fetchContactReject")

// export const addContactRequest = createAction("contact/addContactRequest")
// export const addContactSuccess = createAction("contact/addContactSuccess")
// export const addContactReject = createAction("contact/addContactReject")

// export const deleteContactRequest = createAction("contact/deleteContactRequest")
// export const deleteContactSuccess = createAction("contact/deleteContactSuccess")
// export const deleteContactReject = createAction("contact/deleteContactReject")

export const changeFilter = createAction('contact/filter');

//Vanilla redux
// export const addContact = (id, name, number) => ({
//   type: types.ADD,
//   payload: { id, name, number },
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
