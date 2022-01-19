import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
