import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.scss';
import { store, persistor } from './redux/store';
import App from './App';

// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(myAction));

// store.dispatch(myAction(5));
// store.dispatch(myAction(20));

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);
