import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import 'modern-normalize/modern-normalize.css';
import App from './App';
import { store } from './redux/store';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
