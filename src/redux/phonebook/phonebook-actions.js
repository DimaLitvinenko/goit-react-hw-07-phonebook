import { createAction } from '@reduxjs/toolkit';

// const asyncActionCreator = args => dispatch => {
//   fetch()
//     .then(x => dispatch(x))
//     .catch(y => dispatch(y));
// };

export const changeFilter = createAction('contact/changeFilter');

// ======= Redux toolkit actions
// export const fetchContactsRequest = createAction("contact/fetchContactRequest")
// export const fetchContactsSuccess = createAction("contact/fetchContactSuccess")
// export const fetchContactsReject = createAction("contact/fetchContactReject")
// export const addContactRequest = createAction("contact/addContactRequest")
// export const addContactSuccess = createAction("contact/addContactSuccess")
// export const addContactReject = createAction("contact/addContactReject")
// export const deleteContactRequest = createAction("contact/deleteContactRequest")
// export const deleteContactSuccess = createAction("contact/deleteContactSuccess")
// export const deleteContactReject=createAction("contact/deleteContactReject")

// ======== Vanilla redux
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
