// import { createAsyncThunk } from '@reduxjs/toolkit'; // при использовании createAsyncThunk
// import axios from 'axios';
// // import {
// //   addContactRequest,
// //   addContactSuccess,
// //   addContactError,
// //   fetchContactsRequest,
// //   fetchContactsSuccess,
// //   fetchContactsError,
// //   delContactRequest,
// //   delContactSuccess,
// //   delContactError,
// // } from './contacts-actions';
// import './contacts-actions';

// // axios.defaults.baseURL = 'http://localhost:4040';

// axios.defaults.baseURL =
//   'https://61ec3caaf3011500174d2116.mockapi.io/api/dimonLy';

// /*================при использовании createAsyncThunk================*/

// export const addContact = createAsyncThunk(
//   'contactsForm/addContact',
//   //====c обработкщй ошибок====//
//   async ({ name, phone }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/contacts', { name, phone });
//       console.log('data: ', response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },

//   //====без обработки ошибок====//
//   // async ({name, phone}) => {
//   //   const response = await axios.post('/contacts', {name, phone});
//   //   return response.data;
//   // }
// );

// export const delContact = createAsyncThunk(
//   'contactData/delContact',
//   //====c обработкщй ошибок====//
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       //   console.log('id: ', response.data)/
//       return response.data.id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },

//   //====без обработки ошибок====//
//   // async (contactId) => {
//   //   const response = await axios.delete(`/contacts/${contactId}`);
//   //   return response.data.id
//   // }
// );

// export const fetchContacts = createAsyncThunk(
//   'contactList/fetchContacts',
//   //====c обработкщй ошибок====//
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       // console.log(response.data)
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },

//====без обработки ошибок====//
// async () => {
//   const response = await axios.get('/contacts');
//   return response.data
// }
// );

/*================без использования createAsyncThunk================*/
/*
export const addContact = (name, phone) => async dispatch => {
  const contact = {
    name,
    phone,
  };

  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  };

     axios
        .post('/contacts', contact)
         .then(({ data }) => dispatch(addContactSuccess(data)))
         .catch(error => dispatch(addContactError(error)));
};

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  };

   axios
     .get('/contacts')
     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)))
};

export const delContact = contactId => async dispatch => {
  dispatch(delContactRequest());
   try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
     dispatch(delContactSuccess(contactId));
   } catch (error) {
     dispatch(delContactError(error));
   }

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(delContactSuccess(contactId)))
    .catch(error => dispatch(delContactError(error)));
};
*/

// -------00000----------------00000000000

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
// } from './contacts-actions';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://61ec3caaf3011500174d2116.mockapi.io/api/dimonly/contacts',
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/addContact',

  async (name, phone, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://61ec3caaf3011500174d2116.mockapi.io/api/dimonly/contacts',
        name,
        phone,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',

  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `https://61e42cd7fbee6800175eb21d.mockapi.io/contacts/${id}`,
      );

      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
