import { combineReducers } from 'redux';
import { setFilterReducer, contactReducer } from './reducer';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const phoneBookReducer = combineReducers({
  contacts: contactReducer,
  filter: setFilterReducer,
});

const persistPhoneBookReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  reducer: persistPhoneBookReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

// ==================================================

// import { createStore } from 'redux';
// import addedContacts from '../src/data/contacts.json';

// const initialState = { counterValue: addedContacts };

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'ADD_CONTACT':
// 			return {};
// 	}

// 	return state;
// };
// const store = createStore(reducer);

// export default store;

// =================================================
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {},
// });

/*========================ВАРИАНТ без Redux Toolkit========================*/

// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//     contacts: contactsReducer
// });
// const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools());
// export default store;
