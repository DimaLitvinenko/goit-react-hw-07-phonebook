// ====== ВАРИАНТ с Redux Toolkit, заморочено ======
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phonebookReducer from './phonebook/phonebook-reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// ======= Vanilla Redux

// const rootReducer = combineReducers({
//   phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
// });

// const store = createStore(rootReducer, composeWithDevTools());
