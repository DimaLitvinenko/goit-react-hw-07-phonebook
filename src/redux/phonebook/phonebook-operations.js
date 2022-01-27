import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        //  "https://61e42cd7fbee6800175eb21d.mockapi.io/contacts"
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

  async (name, phone, rejectWithValue) => {
    try {
      const { data } = await axios.post(
        // "https://61e42cd7fbee6800175eb21d.mockapi.io/contacts",
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
        // `https://61e42cd7fbee6800175eb21d.mockapi.io/contacts/${id}`,
        `https://61ec3caaf3011500174d2116.mockapi.io/api/dimonly/contacts/${id}`,
      );
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// ======= Vanilla async

//  export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get(
//       "https://61e42cd7fbee6800175eb21d.mockapi.io/contacts"
//     );
//     console.log(data)
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsReject(error.message));
//   }

//   //   axios
//   //     .get("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts")
//   //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//   //     .catch((error) => dispatch(fetchContactReject(error)));
// };

// export const addContact = createAsyncThunk(
//   'contact/addContact',
//   async (name,phone) => {
//      const {data}=await  axios
//     .post("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts",
//       {name},
//       phone,
//     )
//     return data
//   }
// )

// export const addContact = (name, phone) => async dispatch => {
//   // const contact={name,phone}
//     dispatch(addContactRequest());
//     try {
//         const {data}=await  axios
//     .post("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts", {
//       name,
//       phone,
//     })
//       console.log(data)
//        dispatch(addContactSuccess(data))
//     }
//     catch (error) {
//         dispatch(addContactReject(error))
//     }

// //   axios
// //     .post("https://61e42cd7fbee6800175eb21d.mockapi.io/contacts", {
// //       name,
// //       phone,
// //     })
// //     .then(({ data }) => dispatch(addContactSuccess(data)))
// //     .catch((error) => dispatch(addContactReject(error)));
// };

// export const deleteContact = (id) => async dispatch => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`https://61e42cd7fbee6800175eb21d.mockapi.io/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactReject(error)));
// };
