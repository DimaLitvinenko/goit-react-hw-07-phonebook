import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/del');
export const contactsFilter = createAction('filter/set');

// ====================================
// export const addContact = value => {
// 	return {
// 		type: 'MY_ACTION',
// 		payload: value,
// 	};
// };
// ==================================================
// export const addUserAction = payload => dispatch => {
// 	dispatch(addUserAction());
// 	addUser(payload)
// 		.then(user => {
// 			dispatch(user);
// 		})
// 		.catch(error => {
// 			dispatch(addUserError(error));
// 		});
// };
